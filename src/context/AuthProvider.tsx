import React, { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { getUser, loginUser, logoutUser } from '@/services/auth';
import User from '@/Models/User';

interface AuthContextProps {
  user: User | null;
  login: (userData: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  isLoggedIn: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: async () => {},
  logout: async () => {},
  isLoggedIn: false
});

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = Cookies.get('token');

        if (token) {
          // Vérifier et définir l'utilisateur si le token existe
          const userData = await getUser();
          setUser(userData);
          setIsLoggedIn(true);
        } else {
          // Rediriger vers la page de connexion si le token est manquant
          router.push('/auth/login');
        }
      } catch (error) {
        console.error("Erreur lors de la vérification de l'authentification", error);
        // Gérer l'erreur de vérification de l'authentification
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const login = async (credential: { email: string; password: string }) => {
    try {
      const response = await loginUser(credential);

      // Enregistrer le token dans les cookies
      Cookies.set('token', response.token);

      // Récupérer les informations de l'utilisateur
      const userData = await getUser();
      setUser(userData.user);

      // Rediriger vers une page protégée ou mettre à jour l'état de l'application
      router.push('/');
    } catch (error) {
      // Gérer l'erreur de connexion
      throw Error (`Erreur lors de la connexion : ${(error as any)?.message}`);
    }
  };
  
  const logout = async () => {
    try {
      // Appeler l'API pour déconnecter l'utilisateur
      await logoutUser();

      // Supprimer le token des cookies
      Cookies.remove('token');

      // Réinitialiser l'état de l'utilisateur
      setUser(null);
      setIsLoggedIn(false);

      // Rediriger vers la page de connexion ou mettre à jour l'état de l'application
      router.push('/auth/login');
    } catch (error) {
      console.error('Erreur lors de la déconnexion', error);
      // Gérer l'erreur de déconnexion
    }
  };

  if (loading) {
    // Afficher un indicateur de chargement si l'authentification est en cours de vérification
    return <div className="relative animate-pulse  flex min-h-screen w-full justify-center items-center text-primary font-bold text-2xl">
            Chargement ...
          </div>
  ;
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);

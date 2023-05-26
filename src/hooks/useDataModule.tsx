import Company from '@/Models/Company'
import Session from '@/Models/Session';
import Training from '@/Models/Training';
import User from '@/Models/User';
import CompanyService from '@/services/companies';
import httpClient from '@/services/http';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

type DataModuleProps = {
  company?: Company;
}

const useDataModule = ({ company }:DataModuleProps) => {
  const [currentTraingId,setCurrentTraingId] = useState<number|undefined>();
  const [currentSessionId,setCurrentSessionId] = useState<number|undefined>();

  const [currentTraining,setCurrentTraining] = useState<Training|undefined>();
  const [currentSession,setCurrentSession] = useState<Session|undefined>();

  const getUsers = async () => {
    try {
     return await httpClient.get(`${company?.api_url ?? ''}/module-ext/users`).then(res => res.data) as Promise<User[]>;
    } catch (error) {
       console.log(error);
       return [];
    } 
   }

   const getTrainings = async () => {
    try {
     return await httpClient.get(`${company?.api_url ?? ''}/module-ext/training`).then(res => res.data) as Promise<Training[]>;
    } catch (error) {
       console.log(error);
       return [];
    } 
   }
 
   const getSessions = async (training_id: number) => {
     try {
      return await httpClient.get(`${company?.api_url ?? ''}/module-ext/${training_id}/sessions`).then(res => res.data) as Promise<Session[]>;
     } catch (error) {
        console.log(error);
        return [];
     } 
    }

   const { data: users, isLoading: isUserLoading } = useQuery({
    enabled: !!company,
    queryFn: () => getUsers(),
    queryKey: ['users']
   })
 
   const { data: trainings, isLoading: isTrainingLoading } = useQuery({
     enabled: !!company,
     queryFn: () => getTrainings(),
     queryKey: ['trainings',(company?.id ?? 1)]
   })
 
   const { data: sessions, isLoading: isSessionLoading } = useQuery({
     enabled: !isTrainingLoading && !!currentTraingId,
     queryFn: () => getSessions(currentTraingId ?? 1),
     queryKey: ['sessions',(currentTraingId ?? 1),(company?.id ?? 1)]
   })

   const { data: companies } = useQuery({
    queryFn: CompanyService.getAll,
    queryKey: ['companies']
   })

   useEffect(() => {
    if(currentTraingId){
      setCurrentTraining(trainings?.find(t => t.id === currentTraingId));
    }
   },[currentTraingId,trainings]);

   useEffect(() => {
    if(currentTraingId && currentSessionId){
      setCurrentSession(sessions?.find(t => t.id === currentSessionId));
    }
   },[currentTraingId,currentSessionId,sessions]);

  return {
    users,
    trainings,
    sessions,
    isLoading:  isTrainingLoading || isUserLoading,
    isSessionLoading,
    isTrainingLoading,
    isUserLoading,
    setCurrentTraingId,
    setCurrentSessionId,
    currentSession,
    currentTraining,
    companies
  }
}

export default useDataModule
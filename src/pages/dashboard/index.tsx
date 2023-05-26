import MainLayout from "@/components/layouts/MainLayout";
import InvoiceList from "@/components/pages/invoice/InvoiceList";

export default function Home() {
  return (
    <MainLayout>
      <div className=" mt-4 px-6">
        <h1 className=" text-2xl font-extrabold text-primary ">
          Listing de toutes <br /> les factures
        </h1>
        <p className=" text-gray-500 pt-3">
          Consultez la liste complète de toutes vos factures dans cette section.
        </p>
      </div>

      <div className="px-6 pt-4 pb-20">
        <InvoiceList />
      </div>
    </MainLayout>
  );
}

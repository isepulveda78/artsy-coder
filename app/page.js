import Header from "@/components/Header";
import Store from "@/components/Store";


export default function Home() {
  return (
    <main className="wrap">
      <Header title="Fast Static Starter Web Apps" subtitle="Full Stack Web Development" />
      <Store />
    </main>
  );
}

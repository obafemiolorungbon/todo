import { DashboardLayout } from "./components/DashboardLayout";
import { MainView } from "./components/MainView";
import { SideNav } from "./components/SideNav";

export const Dashboard = () => {
  return (
    <DashboardLayout>
      <SideNav />
      <MainView>WELCOME TO DASHBOARD</MainView>
    </DashboardLayout>
  );
};

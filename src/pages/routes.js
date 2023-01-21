import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/header";
import { ContactContainer } from "./contact";
import { HomeContainer } from "./home";
import { EssenceContainer } from "./essence";
import { FormContainer } from "./form";
import { MissionsContainer } from "./missions";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<HomeContainer />} />
        <Route exact path="/essence" element={<EssenceContainer />} />
        <Route exact path="/missions" element={<MissionsContainer />} />
        <Route exact path="/form" element={<FormContainer />} />
        <Route exact path="/contact" element={<ContactContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

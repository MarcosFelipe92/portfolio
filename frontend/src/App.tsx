import { ProjectSection } from "./components/project-section";
import { HeaderSection } from "./components/header-section";
import { ContactSection } from "./components/contact-section";

export function App() {
  return (
    <div>
      <HeaderSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}

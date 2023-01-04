import './App.css';
// import { ProjectsPage } from './projects/ProjectsPage';
// import { SinginForm } from './extra/forms/sign-in-form';
import { ContactUsForm } from './extra/forms/contact-form';

function App(): JSX.Element {
  return (
    <div className='container'>
      <ContactUsForm />
      {/*<ProjectsPage />*/}
      {/*<SinginForm />*/}
    </div>
  );
}

export default App;

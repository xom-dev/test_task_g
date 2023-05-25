import { Routes, Route } from "react-router-dom";
import Layout from "./modules/common/Layout";
import Courses from "./modules/Courses";
import Libraries from "./modules/Libraries";
import Statistics from "./modules/Statistics";
import Home from "./modules/Home";
import Guideline from "./modules/Guideline";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/libraries" element={<Libraries />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/guideline" element={<Guideline />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

import Button from "./components/ui/Button";
import AddEditArticleModal from "./components/modals/AddEditArticleModal";
import NewsList from "./components/news/NewsList";

import { Toaster } from "react-hot-toast";
import { articleModalStore } from "./store/modal/article/articleModalStore";

const App = (): React.ReactElement => {
  const { triggerModal } = articleModalStore();
  
  return (
    <main className="p-5">
      <Button onClick={() => triggerModal()}>add new article</Button>
      <NewsList />
      <AddEditArticleModal />
      <Toaster />
    </main>
  );
};

export default App;

import { articleModalStore } from "../../store/modal/article/articleModalStore";

import AddEditArticleForm from "../forms/AddEditArticleForm";
import cn from "../../utils/cn";

const AddEditArticleModal = (): React.ReactElement => {
  const { modal, article, triggerModal } = articleModalStore();

  const handleCloseModal = (): void => {
    triggerModal();
  };

  if (!modal) {
    return <></>;
  }

  return (
    <div
      className={cn(`
        w-full h-full min-h-svh fixed top-0 left-0 overflow-hidden 
        bg-black/70 flex justify-center items-center transition-all 
        duration-300
      `)}
    >
      <div className="w-full max-w-[820px] h-auto bg-white rounded-md">
        <div className="w-full flex justify-between items-center p-4">
          <h3 className="text-xl font-semibold">
            {article ? "Update Article" : "Add Article"}
          </h3>
          <button
            type="button"
            className="flex justify-center items-center"
            onClick={handleCloseModal}
          >
            <img src="/close.svg" alt="close" height={22} width={22} />
          </button>
        </div>
        <div className="p-4">
          <AddEditArticleForm />
        </div>
      </div>
    </div>
  );
};

export default AddEditArticleModal;

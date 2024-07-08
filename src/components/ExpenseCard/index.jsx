const ExpenseCard = ({ id, title, value, deleteExpense }) => {
  return (
    <article
      key={id}
      className="flex max-h-52 min-h-48 w-48 flex-col items-center justify-between rounded-md bg-[#F7F6FA] shadow-md duration-200 hover:scale-105"
    >
      <p className="w-full rounded-t-md bg-[#645cff] p-1 text-center text-xl font-bold">
        {title[0].toUpperCase() + title.slice(1, title.length)}
      </p>
      <p className="text-md text-2xl font-medium text-[#102a42]">R${value}</p>
      <div className="flex w-full justify-center gap-5 rounded-b-md py-2">
        <button className="h-6 w-14 rounded-md bg-green-700 px-1">
          Editar
        </button>
        <button
          className="h-6 rounded-md bg-red-800 px-1 text-white"
          onClick={deleteExpense}
        >
          Remover
        </button>
      </div>
    </article>
  );
};
export default ExpenseCard;

export default function MacroTable({kcal,protein,carbs,fat}){
  const cell="px-3 py-2 border";
  return (<div className="not-prose overflow-x-auto">
    <table className="min-w-[360px] border-collapse rounded-lg overflow-hidden">
      <thead><tr className="bg-slate-100 dark:bg-slate-800"><th className={cell}>Calories</th><th className={cell}>Protein</th><th className={cell}>Carbs</th><th className={cell}>Fat</th></tr></thead>
      <tbody><tr><td className={cell}>{kcal} kcal</td><td className={cell}>{protein} g</td><td className={cell}>{carbs} g</td><td className={cell}>{fat} g</td></tr></tbody>
    </table>
  </div>);
}

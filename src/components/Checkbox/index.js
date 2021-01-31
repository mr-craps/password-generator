
export default function Checkbox({label }) {
  return (
    <label class="flex justify-start items-center py-1 select-none">
      <div class="bg-white border-2 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
        <input type="checkbox" class="opacity-0 absolute" />
        <svg class="fill-current hidden w-3 h-3 text-green-500 pointer-events-none" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
      </div>
      <div class="text-gray-500">{label}</div>
    </label>
  );
}
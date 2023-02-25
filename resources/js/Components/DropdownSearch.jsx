import InputLabel from "@/Components/InputLabel";

export default function DropdownSearch({ user, value, setValue }) {
  return (
    <div className="input-group mb-3 ">
      <InputLabel value="Year Level" className="pb-3 " />
      <input
        type="text"
        name="year_level"
        id="year_level"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="min-w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      />
      <div className="dropdown">
        {user
          .filter((item) => {
            const searchTeachers = value.toLowerCase();
            const fullName = item.name.toLowerCase();

            return (
              searchTeachers &&
              fullName.startsWith(searchTeachers) &&
              fullName !== searchTeachers
            );
          })
          .slice(0, 10)
          .map((teacher) => (
            <option
              className="dropdown-row"
              onClick={setValue(teacher.name)}
              value={teacher.name}
              key={teacher.name}
            >
              {teacher.name}
            </option>
          ))}
      </div>
    </div>
  );
}

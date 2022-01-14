import fetch from "node-fetch";

export const getAllTasksData = async () => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`)
  );
  const tasks = await res.json();
  const staticFilteredTasks = tasks.sort(
    // created_atが大きい順
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
  return staticFilteredTasks;
};

export const getAllTaskIds = async () => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`)
  );
  const tasks = await res.json();
  return tasks.map((task) => {
    return {
      params: {
        id: String(task.id),
      },
    };
  });
};

export const getTaskData = async (id) => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-task/${id}`)
  );
  const staticTask = await res.json();
  return staticTask;
};

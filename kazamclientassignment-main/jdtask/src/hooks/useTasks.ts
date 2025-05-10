import { useEffect, useState } from "react";
import { getTasks, addTask } from "../services/api";
import MqttClient from "../setup/mqttpSetup";

export const useTasks = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const fetchTasks = async () => {
    const response = await getTasks();
    setTasks(response.data?.tasks);
  };

  const createTask = async (text: string) => {
    await addTask(text);
  };

  useEffect(() => {
    fetchTasks();

    MqttClient.on("message", (topic, message) => {
      console.log("Received message:", topic, message.toString());
      if (topic === "/tasks/updates") {
        const tasks = JSON.parse(message.toString());
        setTasks(tasks);
      }
    });
  }, []);

  return { tasks, createTask };
};

import axios from "axios";
import { publishTask } from "../setup/mqttpSetup";

const BASE_URL = "http://localhost:3000";

export const getTasks = () => axios.get(`${BASE_URL}/fetchAllTasks`);

export const addTask = async (task: string) => publishTask(task);

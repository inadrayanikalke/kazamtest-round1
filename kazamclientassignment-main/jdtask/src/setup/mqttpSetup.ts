import mqtt from "mqtt";

const MQTT_BROKER =
  "wss://593ad412199741ed9b34dcb33d3e3089.s1.eu.hivemq.cloud:8884/mqtt";
const MQTT_USERNAME = "mqtt_user";
const MQTT_PASSWORD = "myPassword@123";
const TOPIC = "/add";
const UPDATES_TOPIC = "/tasks/updates"; 

let client = mqtt.connect(MQTT_BROKER, {
  username: MQTT_USERNAME,
  password: MQTT_PASSWORD,
  reconnectPeriod: 1000,
  connectTimeout: 4000,
});

client.on("connect", () => {
  console.log("Connected to HiveMQ Cloud MQTT Broker");

  client.subscribe(UPDATES_TOPIC, (err) => {
    if (err) {
      console.error("Subscription error:", err);
    } else {
      console.log("Subscribed to updates topic");
    }
  });
});

client.on("error", (err) => {
  console.error("Connection failed:", err);
});

export function publishTask(task:string) {
  if (client.connected) {
    client.publish(TOPIC, task);
  } else {
    console.warn("Client not connected yet.");
  }
}

export default client;
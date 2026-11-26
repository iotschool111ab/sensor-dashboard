// sensor.js：產生一筆模擬的溫濕度資料，並以 JSON 印出
// 【L1-1 起始版】對應講義「四、實作範例」步驟 3
// 執行：node sensor.js
const reading = {
  deviceId: 'esp32-01',                                        // 設備編號
  location: '訓練大樓2f-2208',                                         // 設備安裝位置
  temperature: Number((20 + Math.random() * 10).toFixed(1)),   // 20.0–30.0 °C
  humidity: Number((40 + Math.random() * 30).toFixed(1)),      // 40.0–70.0 %
  ts: new Date().toISOString(),                             // UTC 時間戳記
};

console.log(JSON.stringify(reading));

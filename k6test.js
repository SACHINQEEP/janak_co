import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { sleep } from "k6";
import http from "k6/http";

// See https://k6.io/docs/using-k6/options
export const options = {
  stages: [
    { duration: "1m", target: 50 },
    //{ duration: "1m", target: 60 },
    { duration: "1m", target: 0 },
  ],
  thresholds: {
    //http_req_failed: ["rate<0.02"], // http errors should be less than 2%
    http_req_duration: ["p(95)<2000"], // 95% requests should be below 2s
  },
};

export default function () {
  http.get("https://d25ujugka0v83c.cloudfront.net");
  sleep(1);
  let response = http.get("https://d25ujugka0v83c.cloudfront.net");
  sleep(1);
}

export function handleSummary(data) {
  return {
    "K6summary.html": htmlReport(data),
  };
}

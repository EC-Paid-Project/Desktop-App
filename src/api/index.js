import axios from "axios";
export const baseURL = "https://8d74-115-186-50-46.ngrok-free.app/";
const API = axios.create({ baseURL: baseURL });
API.interceptors.request.use((req) => {
//   if (localStorage.getItem("authToken")) {
//     req.headers.Authorization = `Token ${JSON.parse(
//       localStorage.getItem("authToken")
//     )}`;
//   }
req.headers["Content-Type"] = "application/json";

  return req;
});

export const postAppointment = async (formdata) => await API.post(`appointment/`,formdata);
export const getAppointment = async () => await API.post('get_appointment/')
export const deleteAppointment = async (id) => {
    console.log(id)

    return await API.delete('get_appointment/',{data:id})}
export const postGasDetails = async (formdata) => await API.post("gasdetails/",formdata);





// {
//     "id": 1,
//     "about": "Welcome to SmartGas Solutions, a leading gas manufacturing company dedicated to providing high-quality gas cylinders for various industries and applications. With years of experience and a commitment to excellence, we have established ourselves as a trusted name in the industry./n\r\n\r\nAt SmartGas Solutions, we take pride in our superior manufacturing processes and stringent quality control measures. Our state-of-the-art facilities and advanced technology enable us to produce gas cylinders that meet the highest standards of safety and performance. We offer a wide range of cylinders suitable for diverse gases, ensuring that our customers find the perfect solution for their specific needs./n\r\n\r\nCustomer satisfaction is at the core of our business philosophy. We strive to build long-lasting relationships with our clients by understanding their requirements and delivering personalized solutions. Our team of experts is always ready to provide professional guidance and support, ensuring a seamless experience from order placement to delivery./n\r\n\r\nAs a responsible and environmentally conscious company, we prioritize sustainability and adhere to strict environmental regulations. We constantly invest in research and development to innovate and improve our products, ensuring that we stay at the forefront of the industry./n\r\n\r\nChoose SmartGas Solutions as your trusted partner for all your gas cylinder needs. Experience our commitment to quality, reliability, and customer satisfaction.",
//     "policy": "By using our mobile application, you agree to the following terms and conditions:/n/n\r\n\r\n1. Product Information/n/n\r\n\r\nWe strive to provide accurate and up-to-date information about our liquid petroleum gas containers, including pricing, specifications, and availability. However, we cannot guarantee the accuracy and completeness of the information at all times. It is the customer's responsibility to verify the details before making a purchase./n/n\r\n\r\n2. Purchase and Delivery/n/n\r\n\r\nAll purchases made through our mobile application are subject to product availability. We reserve the right to cancel or modify orders if the product is out of stock or if there are any pricing or technical errors. Delivery of the liquid petroleum gas containers will be made to the address specified by the customer during the order process./n/n\r\n\r\n3. Safety Precautions/n/n\r\n\r\nHandling and usage of liquid petroleum gas containers must strictly adhere to the safety guidelines provided by the manufacturer. It is the customer's responsibility to familiarize themselves with the safety precautions and follow them accordingly. We shall not be held liable for any damages or accidents resulting from improper handling or usage of the products./n/n\r\n\r\n4. Returns and Refunds/n/n\r\n\r\nReturns and refunds are subject to our company's return policy. If you wish to return a liquid petroleum gas container, please contact our customer support within 7 days of the delivery date. The product must be unused and in its original packaging for a valid return and refund.",
//     "email": "info@yourcompany.com",
//     "phone_no": "+923001234567",
//     "address": "A-23, St-12, Sector 14-B, Karachi, Pakistan"
// }
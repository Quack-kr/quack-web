import axios from "axios";

export const businessNumberCheckHandler = async (bno: string) => {
  const data = { b_no: [bno] };
  const response = await axios.post(
    `https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=${process.env.VITE_BUSINESS_API_KEY}`,
    data,
  );
  console.log(response);

  return response.status === 200 && response.data.data[0].tax_type_cd === '01'
    ? '인증되었습니다.'
    : response.data.data[0].tax_type;
};
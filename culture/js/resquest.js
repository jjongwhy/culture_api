/* ====== Common GET Request Function ====== */
async function getRequest(url) {
  return await fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

async function getCultures() {
  const url = `http://openapi.seoul.go.kr:8088/696c4d6b4370676f35336d4269616a/json/culturalEventInfo/1/30/`;

  try {
    // 데이터 요처 및 응답 시도 : 성공일 경우 첫번째 코드 블럭으로 이동
    const data = await getRequest(url);
    console.log(data);
  } catch (error) {
    // 실패할 경우 두번째 코드 블럭으로 이동
    console.log('Error : ', error);
  }
}

getCultures();

// https://data.seoul.go.kr/dataList/OA-15486/S/1/datasetView.do

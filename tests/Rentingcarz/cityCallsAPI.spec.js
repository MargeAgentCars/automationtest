import { test, expect } from '@playwright/test';

const isos = [
    {iso: "LAX"}, {iso: "MIA"}, {iso: "SFO"}, {iso: "ORL"}, {iso: "HNL"}, {iso: "MAD"}, { iso: "CDG"},
    {iso: "BCN"}, {iso: "ROM"}, {iso: "LIS"}, {iso: "BOG"}, {iso: "CTG"}, {iso: "MDE"}, {iso: "CLO"},
    {iso: "SMR"}, {iso: "LIM"}, {iso: "PTY"}, {iso: "EZE"}, {iso: "RIO"}, {iso: "SCL"}, {iso: "SJO"},
    {iso: "CUN"}, {iso: "YVR"}, {iso: "DCA"}, {iso: "TGU"}, {iso: "OKA"}, {iso: "SYD"}, {iso: "DXB"},
    {iso: "BER"}, {iso: "LON"}, {iso: "FCO"}, {iso: "ATL"}, {iso: "ORD"}, {iso: "DFW"}, {iso: "DEN"},
    {iso: "FRA"}, {iso: "GRU"}, {iso: "JFK"}, {iso: "EWR"}, {iso: "MCI"}
];

for(const {iso} of isos) {  
    test(`API test ${iso}`, async ({ page}) =>{
        let urlcreated = `https://api-suggest.agentcars.com/suggest?query=${iso}&lang=es-MX`

        const response = await page.request.get(urlcreated)
        await expect(response).toBeOK();
    });
}
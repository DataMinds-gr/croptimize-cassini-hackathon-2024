import cdsapi

dataset = "reanalysis-era5-land-monthly-means"
request = {
    "variable": [
        "skin_temperature",
        # "soil_temperature_level_1",
        # "snowfall",
        # "skin_reservoir_content",
        # "total_precipitation",
    ],
    "year": ["2023"],
    "month": [
        "01",
        # "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"
    ],
    "time": [
        "00:00",
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
    ],
    "data_format": "grib",
    "download_format": "zip",
    "area": [40.64, 22.95, 40.63, 22.97],
}

client = cdsapi.Client()
client.retrieve(dataset, request).download()

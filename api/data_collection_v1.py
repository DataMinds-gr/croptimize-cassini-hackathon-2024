from oauthlib.oauth2 import BackendApplicationClient
from requests_oauthlib import OAuth2Session

# Your client credentials
client_id = 'sh-9e591b3a-36ee-49c1-94db-96f930cd411a'
client_secret = 'tPgVarxGoKIJDmxGUIfDBD6YY30cRMaq'

# Create a session
client = BackendApplicationClient(client_id=client_id)
oauth = OAuth2Session(client=client)

# Get token for the session
token = oauth.fetch_token(token_url='https://identity.dataspace.copernicus.eu/auth/realms/CDSE/protocol/openid-connect/token',
                          client_secret=client_secret, include_client_id=True)

# All requests using this session will have an access token automatically added
resp = oauth.get("https://sh.dataspace.copernicus.eu/configuration/v1/wms/instances")
print(resp)


evalscript = """
//VERSION=3
function setup() {
  return {
    input: [{
      bands: [
        "B04",
        "B08",
        "SCL",
        "dataMask"
      ]
    }],
    output: [
      {
        id: "data",
        bands: 1
      },
      {
        id: "dataMask",
        bands: 1
      }]
  }
}

function evaluatePixel(samples) {
    let ndvi = (samples.B08 - samples.B04)/(samples.B08 + samples.B04)

    var validNDVIMask = 1
    if (samples.B08 + samples.B04 == 0 ){
        validNDVIMask = 0
    }

    var noWaterMask = 1
    if (samples.SCL == 6 ){
        noWaterMask = 0
    }

    return {
        data: [ndvi],
        // Exclude nodata pixels, pixels where ndvi is not defined and water pixels from statistics:
        dataMask: [samples.dataMask * validNDVIMask * noWaterMask]
    }
}
"""


stats_request = {
    "input": {
        "bounds": {
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [458085.878866, 5097236.833044],
                        [457813.834156, 5096808.351383],
                        [457979.897062, 5096313.767184],
                        [458146.639373, 5096405.411294],
                        [458085.878866, 5097236.833044],
                    ]
                ],
            },
            "properties": {"crs": "http://www.opengis.net/def/crs/EPSG/0/32633"},
        },
        "data": [
            {"type": "sentinel-2-l2a", "dataFilter": {"mosaickingOrder": "leastCC"}}
        ],
    },
    "aggregation": {
        "timeRange": {"from": "2024-01-01T00:00:00Z", "to": "2024-08-31T00:00:00Z"},
        "aggregationInterval": {"of": "P30D"},
        "evalscript": evalscript,
        "resx": 10,
        "resy": 10,
    },
}

headers = {"Content-Type": "application/json", "Accept": "application/json"}

url = "https://sh.dataspace.copernicus.eu/api/v1/statistics"

response = oauth.request("POST", url=url, headers=headers, json=stats_request)
sh_statistics = response.json()
sh_statistics

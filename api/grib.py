import pygrib

# Open the GRIB file
grib_file = "data/data.grib"
grbs = pygrib.open(grib_file)

# Loop through messages
for grb in grbs:
    print(grb)


# Access specific data
grb = grbs[1]
data, lats, lons = grb.data()
print(data)

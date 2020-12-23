import csv
import json

csvfile = open('file2.csv', 'r', encoding="utf8")
jsonfile = open('file.json', 'w')

fieldnames = ("Charity ID","Facebook","Instagram","Twitter")
reader = csv.DictReader( csvfile, fieldnames)
for row in reader:
    json.dump(row, jsonfile)
    jsonfile.write(',\n')
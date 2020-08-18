import csv
from os import listdir
from os.path import isfile, join

parent_directory = r"csvs"


def generate_all_data(parent_directory):
    all_data = []

    file_paths = [join(parent_directory, f) for f in listdir(parent_directory) if isfile(join(parent_directory, f)) and f!="all_data.csv"]

    for a_file in file_paths:
        print("reading file:", a_file)
        encoding = get_encoding(a_file)
        all_data = read_one_file(a_file, encoding, all_data)

    add_data_to_csv(all_data)

    print("reading and writing complete. Size of all_data", len(all_data))
    for i in range(5):
        print(all_data[i])

def get_encoding(a_file):
    # change encoding based on file - summer research 2020.csv was written in different encoding than others
    if a_file.replace("csvs", "")[1:] == "Summer Research 2020.csv":
        encoding = "cp1252"
    else:
        encoding = "utf8"
    return encoding


def read_one_file(a_file, encoding, all_data):

    # read file line by line
    with open(a_file, newline='', encoding=encoding) as f:
        reader = csv.reader(f, skipinitialspace=True)
        # skip first row as it's headers
        next(reader)
        for row in reader:
            if row not in all_data:
                all_data.append(row)

    return all_data


def add_data_to_csv(all_data):
    with open(join(parent_directory, "all_data.csv"), "w", newline='', encoding="utf8") as final_csv:
        writer = csv.writer(final_csv, quoting=csv.QUOTE_MINIMAL)
        writer.writerow(["Submission","Presentation Number","Contact Email","Corresponding Author","Students","Advisors","Major","Title","Video","Abstract","Slides"])
        for row in all_data:
            writer.writerow(row)


generate_all_data(parent_directory)


import csv
from os import listdir
from os.path import isfile, join

parent_directory = r"csvs"


def generate_all_data(parent_directory):
    """
    Generate csv file with concatenated data from all dept files in the parent directory
    :param parent_directory: path of parent directory
    :return: None
    """
    all_data = []

    file_paths = [join(parent_directory, f) for f in listdir(parent_directory) if isfile(join(parent_directory, f)) and f!="all_data.csv"]

    for a_file in file_paths:
        print("reading file:", a_file)
        encoding = get_encoding(a_file)
        all_data = read_one_file(a_file, encoding, all_data)

    add_data_to_csv(all_data)

    print("reading and writing complete. Size of all_data", len(all_data))


def get_encoding(a_file):
    """
     Change encoding to read csv file based on the filename.
     Needed because Summer Research 2020.csv was written in different encoding than others
    :param a_file: path of current file
    :return encoding: the type of encoding as a string
    """
    if a_file.replace("csvs", "")[1:] == "Summer Research 2020.csv":
        encoding = "cp1252"
    else:
        encoding = "utf8"
    return encoding


def read_one_file(a_file, encoding, all_data):
    """
    Read one csv file line by line to get its contents and add to the all_data array
    :param a_file: path of current file
    :param encoding: encoding type
    :param all_data: the array of all the data
    :return all_data: updated with the info from the new file
    """
    # read file line by line
    with open(a_file, newline='', encoding=encoding) as f:
        reader = csv.reader(f, skipinitialspace=True)
        # skip first row as it's headers
        next(reader)
        for row in reader:
            if row not in all_data: # check uniqueness of entry
                all_data.append(row)
    return all_data


def add_data_to_csv(all_data):
    """
    Write all_data to csv file with name all_data.csv in the parent directory. Each element of all_data is its own row.
    :param all_data: the array whose elements will be added to csv
    :return: None
    """
    with open(join(parent_directory, "all_data.csv"), "w", newline='', encoding="utf8") as final_csv:
        writer = csv.writer(final_csv, quoting=csv.QUOTE_MINIMAL)
        writer.writerow(["Submission","Presentation Number","Contact Email","Corresponding Author","Students","Advisors","Major","Title","Video","Abstract","Slides"])
        for row in all_data:
            writer.writerow(row)


generate_all_data(parent_directory)


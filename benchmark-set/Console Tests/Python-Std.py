def print_numbers():
    for i in range(1, 101):
        if i % 5 == 0 and i % 7 == 0:
            print("Five-Seven")
        elif i % 5 == 0:
            print("Five")
        elif i % 7 == 0:
            print("Seven")
        else:
            print(i)

# Call the function to print the output
print_numbers()

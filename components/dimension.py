def calculate_hi_bi():
    while True:
        choice = input("Type 'hi' to calculate Hi, 'bi' to calculate Bi, or 'exit' to quit: ").strip().lower()
        if choice == 'exit':
            print("Exiting...")
            break
        elif choice == 'hi':
            try:
                value = int(input("Enter integer value for Hi calculation: "))
                hi = (value / 933) * 100
                result = round(hi, 2) > 0
                print(f"Hi: {round(hi, 2)} -> Boolean: {result}")
            except ValueError:
                print("Please enter a valid integer.")
        elif choice == 'bi':
            try:
                value = int(input("Enter integer value for Bi calculation: "))
                bi = (value / 420) * 100
                result = round(bi, 2) > 0
                print(f"Bi: {round(bi, 2)} -> Boolean: {result}")
            except ValueError:
                print("Please enter a valid integer.")
        else:
            print("Invalid choice. Please type 'hi', 'bi', or 'exit'.")

if __name__ == "__main__":
    calculate_hi_bi()
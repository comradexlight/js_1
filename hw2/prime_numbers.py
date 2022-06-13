from datetime import datetime

def is_prime_number(i: int, primes: set) -> int:
    for prime in primes:
        if not (i == prime or i % prime):
            return False
    primes.add(i)
    return i

def first_n_prime_numbers() -> set:
    n = int(input("Введите количество первых простых чисел, которые необходимо найти "))
    global start_time
    start_time = datetime.now()
    primes = set([2])
    i, p = 2, 0
    while True:
        if is_prime_number(i, primes):
            p += 1
            if p == n:
                return primes
        i += 1


if __name__ == "__main__":
    print(first_n_prime_numbers())
    print(f'Время выполнения {datetime.now() - start_time}')


import math
from datetime import datetime


def is_prime(number: int) -> bool:
    if number < 2:
        return False
    for i in range(2, int((math.sqrt(number)) + 1)):
        if number % i == 0:
            return False
    return True


def get_n_primes(number: int) -> list:
    list_of_primes = []
    i = 2

    while len(list_of_primes) < number:
        if is_prime(i):
            list_of_primes.append(i)
        i += 1

    return list_of_primes


if __name__ == "__main__":
    start_time = datetime.now()
    print(get_n_primes(100))
    print(f'Время выполнения {datetime.now() - start_time}')

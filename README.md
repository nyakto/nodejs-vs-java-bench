Для запуска необходимо наличие следующих пакетов:
```
sudo apt-get install make g++ nodejs npm openjdk-7-jdk
```

Запуск теста:
```
make
```

Мои результаты тестов:
```
c++ x 0.22 ops/sec ±1.29% (6 runs sampled)
java x 0.21 ops/sec ±0.36% (6 runs sampled)
node.js x 0.13 ops/sec ±2.53% (5 runs sampled)
node.js is slower than c++ by 64.30%
node.js is slower than java by 60.55%
```

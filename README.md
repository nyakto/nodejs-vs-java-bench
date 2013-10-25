Для запуска необходимо наличие следующих пакетов:
```Bash
sudo apt-get install make g++ nodejs npm openjdk-7-jdk
```

Мои результаты тестов:

c++ x 0.18 ops/sec ±0.23% (5 runs sampled)
java x 0.21 ops/sec ±0.15% (6 runs sampled)
node.js x 0.13 ops/sec ±0.16% (5 runs sampled)
node.js is slower than c++ by 36.49%
node.js is slower than java by 58.90%

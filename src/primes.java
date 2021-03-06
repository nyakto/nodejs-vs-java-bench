import static java.lang.System.out;

public class primes {

	public static class Primes
	{
		public int prime_count;
		public int[] primes = new int[50000];

		public int getPrimeCount () { return this.prime_count; }
		public int getPrime (int i) { return this.primes[i]; }
		public void addPrime (int p) { this.primes[this.prime_count++] = p; }

		public boolean isPrimeDivisible(int candidate) {
			for (int i = 1; i < this.prime_count; ++i) {
				if ((candidate % this.primes[i]) == 0) return true;
			}
			return false;
		}
	}
	
	/**
	 * @param args
	 */
	public static void main(String[] args) {
		Primes p = new Primes();
		int c = 1;
		while (p.getPrimeCount() < 50000) {
			if (!p.isPrimeDivisible(c)) {
				p.addPrime(c);
			}
			c++;
		}
		out.println(p.getPrime(p.getPrimeCount() - 1));
	}

}

class Fibonnaci {
	private int curr;
	private int prev;
	private int sum;
	public Fibonnaci(){
		curr = 1;
		prev = 0
	}
	public int next(){
		int temp = prev
		prev = curr;
		curr = temp + curr;
		return curr;
	}
	public int calculate(){
		sum = sum + next();
		return next()
	}
	public int calcSum(){
		if (prev == 0) 
			return 1;
		else{
			return sum;
		}
	}
}

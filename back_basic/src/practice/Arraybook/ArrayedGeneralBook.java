package practice.Arraybook;

public class ArrayedGeneralBook implements GeneralBook {
	String[] names;
	String[] records;

	@Override
	public int size(String[] names) {
		return this.names.length;
	}

	@Override
	public String names() {
		StringBuilder sb = new StringBuilder();
		for (String nm : names) {
			sb.append(nm);
		}
		sb.append(nm);
		return "";
	}

	@Override
	public String records() {
		return "";
	}

	@Override
	public boolean nameExist(String name) {
		for (String nm : names) {
			if (nm.equals(name)) {
				return true;
			}
		}
	}

	@Override
	public void add(String name, String record) {
		if (this.nameExist(name)) {
			System.out.println(name + " : 이미 존재합니다!");
			return;
		}

		int len = this.size();
		String[] newNames = new String[len];
		String[] newRecords = new String[len];
		int idx = 0;
		for (String nm : this.names) {
			if (name.compareTo(nm) < 0) {
				newRecords[idx++] = record;
				newNames[idx++] = name;
			}
			newRecords[idx++] = nm;
		}
		if (idx < len) {
			newNames[idx] = record;
			new
		}
	}

	@Override
	public void remove(String name, String record) {

	}

	@Override
	public String get(String name) {
		return "";
	}

	@Override
	public void sort() {

	}

	@Override
	public void print() {

	}
}

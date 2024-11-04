package practice;

import java.util.Objects;

public class InvoiceItem {
	private final String id;
	private final String desc;
	private int qty;
	private double unitPrice;

	public InvoiceItem(String id, String desc, int qty, double unitPrice) {
		this.id = id;
		this.desc = desc;
		this.qty = qty;
		this.unitPrice = unitPrice;
	}

	public String getId() {
		return id;
	}

	public String getDesc() {
		return desc;
	}

	public int getQty() {
		return qty;
	}

	public double getUnitPrice() {
		return unitPrice;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public void setUnitPrice(double unitPrice) {
		this.unitPrice = unitPrice;
	}

	public double getTotal() {
		return this.qty * this.unitPrice;
	}

	@Override
	public String toString() {
		return "%sInvoiceItem{id='%s', desc='%s', qty=%d, unitPrice=%s}의 구매 총액은 %,.1f".formatted(
			this.getClass().getSimpleName(), getId(),
			desc, qty, getUnitPrice(), getTotal());
	}

	// equals랑 hashCode는 한몸
	// equals 쓸때 해시알고리즘을 통해서 빨리 찾아감. 그래서 메모리 주소하고 일대일 관계는 아님
	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (obj == null || getClass() != obj.getClass()) {
			return false;
		}
		InvoiceItem that = (InvoiceItem)obj;
		return qty == that.qty && Double.compare(unitPrice, that.unitPrice) == 0 && Objects.equals(id,
			that.id) && Objects.equals(desc, that.desc);
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, desc, qty, unitPrice);
	}
}

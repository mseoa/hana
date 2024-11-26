<%--
  User: campus2H037
  Date: 2024-11-25
  Time: 오후 2:01
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%--<%@ taglib prefix="c" uri="http://www.springframework.org/tags" %>--%>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<html>
<%@ include file="head.jsp" %>
<body>
<div class="container mx-auto">
    <h1 class="text-2xl">Add Cust</h1>
    <form action="${pageContext.request.contextPath}/modify/${cust.id}" method="POST" class="space-x-3">
        <label for="name">Name:
            <input type="text" id="name" name="name" value="${cust.name}" class="border rounded-md px-1"
                   placeholder="이름">
        </label>
        <label for="tel">Tel:
            <input type="text" id="tel" name="tel" value="${cust.tel}" class="border rounded-md px-1"
                   placeholder="전화번호">
        </label>
        <button type="submit" class="hover:text-blue-800 border rounded-md px-2 bg-slate-300 hover:bg-slate-200">Save
        </button>
    </form>
</div>
</body>
</html>

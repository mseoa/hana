<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%--<%@ include file="head.jsp" %>--%>
<body>
<h1 class="text-3xl text-green-800">Dept Main</h1>
<h1>부서 계층 구조</h1>
<p>데이터 크기: ${depts.size()}</p>
<%--<table class="border border-red-300">--%>
<%--    <tr>--%>
<%--        <th>부서명</th>--%>
<%--        <th>부서장</th>--%>
<%--    </tr>--%>
<%--    <c:forEach items="${depts}" var="dept">--%>
<%--        <tr>--%>
<%--            <td>--%>
<%--                <c:forEach begin="1" end="${dept.depth}">&nbsp;&nbsp;&nbsp;&nbsp;</c:forEach>--%>
<%--                <c:if test="${dept.depth > 0}">↳</c:if>--%>
<%--                <c:out value="${dept.dname}"/>--%>
<%--            </td>--%>
<%--            <td><c:out value="${dept.captainName}"/></td>--%>
<%--        </tr>--%>
<%--    </c:forEach>--%>
<%--</table>--%>
</body>

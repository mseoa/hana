<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>


<%@ include file="head.jsp" %>


<c:set var="selectedPid" value="${not empty dept ? dept.pid : (not empty pid ? pid : 0)}" />

<body class="bg-gray-100">
<h1 class="text-3xl text-green-800 my-6">부서 생성/수정</h1>

<form action="${pageContext.request.contextPath}/dept/save" method="post" class="bg-white p-6 rounded-lg shadow-md">

    <c:if test="${not empty dept}">
        <input type="hidden" name="id" value="${dept.id}" />
    </c:if>

    <%-- 상위 부서 선택 --%>
    <div class="mb-4">
        <label for="parentDept" class="block text-sm font-medium text-gray-700">상위 부서</label>
        <select id="parentDept" name="pid" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
            <option value="0" <c:if test="${selectedPid == 0}">selected</c:if>>최상위 부서</option>
            <c:forEach items="${depts}" var="d">
                <option value="${d.deptId}" <c:if test="${selectedPid == d.deptId}">selected</c:if>>
                    <c:forEach var="i" begin="1" end="${d.depth}">
                        &nbsp;&nbsp;
                    </c:forEach>
                    <c:if test="${d.depth > 0}">↳</c:if>
                        ${d.dname}
                </option>
            </c:forEach>
        </select>
    </div>

    <%-- 부서명 입력 --%>
    <div class="mb-4">
        <label for="deptName" class="block text-sm font-medium text-gray-700">부서명</label>
        <input type="text" id="deptName" name="dname"
               value="<c:out value='${dept.dname}'/>"
               class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
               placeholder="부서명을 입력하세요">
    </div>

    <%-- 직원 선택 --%>
    <div class="mb-4">
        <label for="captain" class="block text-sm font-medium text-gray-700">부서장</label>
        <select id="captain" name="captain" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
            <option value="">부서장을 선택하세요</option>
            <c:forEach items="${emps}" var="emp">
                <option value="${emp.id}"
                        <c:if test="${not empty dept and dept.captain == emp.id}">selected</c:if>>
                        ${emp.ename}
                </option>
            </c:forEach>
        </select>
    </div>

    <%-- 제출 버튼 --%>
    <div class="mt-6">
        <button type="submit" class="w-full px-4 py-2 bg-green-500 text-white rounded-md">
            <c:choose>
                <c:when test="${not empty dept}">부서 수정</c:when>
                <c:otherwise>부서 생성</c:otherwise>
            </c:choose>
        </button>
    </div>
</form>
</body>

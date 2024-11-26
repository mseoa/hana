<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%--<%@ include file="head.jsp" %>--%>
<body class="bg-gray-100">
<h1 class="text-3xl text-green-800 my-6">Dept Main</h1>
<h2 class="text-lg text-gray-700 mb-4">부서 계층 구조</h2>
<p class="text-gray-600 mb-6">데이터 크기: ${depts.size()}</p>
<div class="">
    <table class="table-auto border border-gray-300 bg-white rounded-lg shadow-md">
        <thead class="bg-gray-200">
        <tr>
            <th class="px-6 py-3 border border-gray-300 text-left text-gray-700 font-semibold">부서명</th>
            <th class="px-6 py-3 border border-gray-300 text-left text-gray-700 font-semibold">부서장</th>
            <th class="px-6 py-3 border border-gray-300 text-left text-gray-700 font-semibold">
                <a href="/dept/form?pid=0">
                    <span class="text-blue-500 hover:text-blue-700">+</span>
                </a>
            </th>
            <th class="px-6 py-3 border border-gray-300 text-left text-gray-700 font-semibold">
                Action
            </th>
        </tr>
        </thead>
        <tbody>
        <c:forEach items="${depts}" var="dept">
            <tr class="hover:bg-gray-100">
                <td class="px-6 py-3 border border-gray-300">
                    <c:forEach var="i" begin="1" end="${dept.depth}">
                        <span class="inline-block w-10"></span>
                    </c:forEach>
                    <c:if test="${dept.depth > 0}">
                        <span class="text-gray-600">↳</span>
                    </c:if>
                    <a href="/dept/form?deptId=${dept.deptId}">
                        <c:out value="${dept.dname}"/>
                    </a>
                </td>
                <td class="px-6 py-3 border border-gray-300">
                    <c:out value="${dept.captainName}"/>
                </td>
                <td class="px-6 py-3 border border-gray-300">
                    <a href="/dept/form?pid=${dept.deptId}">
                        <span class="text-blue-500 hover:text-blue-700">+</span>
                    </a>
                </td>
                <td class="px-6 py-3 border border-gray-300">
                    <form action="/dept/delete" method="post" style="display:inline;">
                        <input type="hidden" name="deptId" value="${dept.deptId}" />
                        <button type="submit" class="text-red-500 hover:text-red-700 ml-2"
                                onclick="return confirm('정말 이 부서를 삭제하시겠습니까?');">삭제</button>
                    </form>
                </td>
            </tr>
        </c:forEach>
        </tbody>
    </table>
</div>
</body>

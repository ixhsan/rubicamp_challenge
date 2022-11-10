const a = `test`
const b = `check`
const c = [1,2,3,4,5]

console.log(`${a} || ${a}`);
console.log([a,b,...c]);

{/* <div class="navigation">
          <ul class="pagination">
            <% if (currentPage > 1) { %>
              <li class="page-item nav">
                <a href="/?page=<%=currentPage-1%> " class="page-link">
                  Previous
                </a> 
              </li>
              <% } %> 
              <% for (let i = iterator; i <= endingLink; i++) { %> 
                <% if (i === currentPage) { %> 
                  <li class="page-item num active">
                    <a class="active" href="/?page=<%=i%>" class="page-link">
                      <%=i%>
                    </a>
                  </li>
                  <% continue; %> 
                  <% } else if (i <= 0) { continue;}%> 
                  <li class="page-item num">
                    <a href="/?page=<%=i%>" class="page-link">
                      <%=i%>
                    </a>
                  </li>
                  <% } %> 
                  <% if(currentPage < numOfPages) { %>
                    <li class="page-item nav">
                      <a href="/?page=<%=currentPage+1%> " class="page-link">
                        Next
                      </a> 
                    </li>
                  </ul>
                  <% } %>  
              </div> */}
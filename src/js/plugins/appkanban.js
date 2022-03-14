(function ($) {
  dragula([
    document.getElementById("todo"),
    document.getElementById("doing"),
    document.getElementById("done"),
  ]);

  const boardTitle = document.getElementById("board_title");
  const CreateBoard = document.getElementById("createboard");

  if (boardTitle) {
    setInterval(function () {
      if (boardTitle.value.length > 0) {
        CreateBoard.disabled = false;
      } else {
        CreateBoard.disabled = true;
      }
    }, 100);
  }

  var ID = function () {
    return "_" + Math.random().toString(36).substr(2, 9);
  };

  if (CreateBoard) {
    CreateBoard.addEventListener("click", function (event) {
      event.preventDefault();

      let StingId =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);

      let kanbanParents = document.getElementById("kanban_board_parent");
      let kabanChild = document.createElement("div");
      kabanChild.classList.add("kanbanboard_child");
      kabanChild.innerHTML = `   
      <div class="kanbanboard_child">
      <div class="card">
          <div class="card-body" >
            <div class="kanban-board-header">
              <h5>${boardTitle.value}</h5>
              <button class="dots-three text-gray-400 f-size-24" type="button">
                <img src="assets/images/svg/dot.svg" alt="clock">
              </button>
            </div>
            <div id="${StingId}">
            <button class="btn btn-primary2 btn-icon pill d-block"  name="button-group2" type="button" id="${
              "btn" + StingId
            }">
            <span class="button-content-wrapper">
              <span class="button-icon align-icon-right">
                <i class="ph-arrow-right"></i>
              </span>
              <span class="button-text" >
                 
            Add new card
              </span>
              </span>
            
            </button>
            
            </div>
            
          </div>
      </div>
      
    </div>
      
      `;

      kanbanParents.appendChild(kabanChild);
      kanbanParents.insertBefore(kabanChild, kanbanParents.childNodes[6]);
      boardTitle.value = "";
      $("#createboard-modal").modal("hide");
      document.querySelector(".modal-backdrop").remove();
      //$(".modal-backdrop").removeClass("show")
      dragula([document.getElementById(StingId)]);

      let btngroup = document.getElementsByName("button-group2");
      btngroup.forEach(function (item, index) {
        item.addEventListener("click", function () {
          let modalbox = document.createElement("div");
          let overlay = document.createElement("div");
          overlay.setAttribute("class", "modal-backdrop fade show");
          overlay.setAttribute("id", "modal-vag3");
          modalbox.setAttribute("class", "modal fade show");
          modalbox.style.display = "block";
          modalbox.innerHTML = `
          <div class="modal-dialog createcard-modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="body-font-3">Create New Card</h5>
            <button type="button" class="plain-btn" id="modal-vag" aria-label="Close">
              <img src="assets/images/svg/close-btn.png" alt="" draggable="false">
            </button>
          </div>
          <div class="modal-body">
            <form id="boardform">
              <div class="rt-mb-24">
                <div class="row">
                  <div class="col-12 rt-mb-15">
                  <div className="fromGroup">
                  <label class=" body-font-4 pointer block mb-2" for="card_title_1">Tittle</label>
                  <input type="text" placeholder="Add tittle" class="form-control" id="card_title_1">
                  
                  </div>
                    
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 rt-mb-15">
                    <label for="">Priority</label>
                    <select name="" id="priority__tag" >
                      <option value="High Priority">High Priority</option>
                      <option value="Low Priority">Low Priority</option>
                    </select>
                  </div>
                  <div class="col-md-6 rt-mb-15">
                    <label for="">Label</label>
                    <select name="" id="urgent_tag">
                      <option value="hight">Urgents</option>
                      <option value="low">Medium</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 rt-mb-15">
                    <textarea  rows="4" placeholder="Write something about your events..." ></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 rt-mb-15">
                    <div class="fromGroup has-icon">
                      <label>Created Date</label>
                      <div class="form-control-icon">
                        <input class="form-control date-picker-calender" type="text" placeholder="DD / MM / YY">
                        <div class="icon-badge-2">
                          <img src="assets/images/svg/calendar.svg" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 rt-mb-15">
                    <div class="fromGroup has-icon">
                      <label>Due Date</label>
                      <div class="form-control-icon">
                        <input class="form-control date-picker-calender" type="text" placeholder="DD / MM / YY">
                        <div class="icon-badge-2">
                          <img src="assets/images/svg/calendar.svg" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                  <div className="fromGroup">
                   <label for="member-email" class="block rt-mb-4">Add Member</label>
                    <input type="text" placeholder="Member email address" id="member-email">
                  </div>
                   
                  </div>
                </div>
              </div>
              <div class="createcard-modal-footer d-flex justify-content-between">
                <button type="button" class="btn btn-dark2 pill" id="modal-vag2" >Cancel</button>
         
                <button type="submit" class="btn btn-primary pill btn-icon" id="createcard">
                  <span class="button-content-wrapper">
                  <span class="button-icon align-icon-right">
                    <i class="ph-arrow-right"></i>
                  </span>
                  <span class="button-text" >
                    Create Column
                  </span>
                  </span>
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
          
          `;
          document.body.appendChild(modalbox);
          document.body.appendChild(overlay);
          document.getElementById("modal-vag").onclick = function () {
            document.body.removeChild(modalbox);
            document.body.removeChild(overlay);
          };
          document.getElementById("modal-vag2").onclick = function () {
            document.body.removeChild(modalbox);
            document.body.removeChild(overlay);
          };
          document.getElementById("modal-vag3").onclick = function () {
            document.body.removeChild(modalbox);
            document.body.removeChild(overlay);
          };

          const createcard = document.getElementById("boardform"); // form id
          createcard.addEventListener("submit", function (event) {
            event.preventDefault();
            let cardTitle = document.getElementById("card_title_1");
            let collectdate = new Date();
            let currentdate =
              collectdate.getDate() +
              " " +
              collectdate.toLocaleString("default", { month: "short" }) +
              ", " +
              collectdate.getFullYear();
            let priority__tag = document.getElementById("priority__tag");

            let CurrentcardP = item.getAttribute("id");

            let cardPriority = document.getElementById(
              $("#" + CurrentcardP)
                .parent()
                .attr("id")
            );

            let innerCard = document.createElement("div");
            innerCard.classList.add("div");
            innerCard.innerHTML = ` 
            <div class="card-priority rt-mb-12 newcard" id="${
              "newcard" + ID()
            }">
                                  <!-- top bar  -->
                                  <div class="card-priority__header">
                                    <div class="date">
                                      <span class="icon">
                                        <img src="assets/images/svg/clock.svg" alt="clock">
                                      </span>
                                      <p>${currentdate}</p>
                                    </div>
                                    <!-- actions  -->
                                    <div class="card-priority__actions">
                                      <button class="dots-three text-gray-400 f-size-24" type="button" id="downMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                                        <img src="assets/images/svg/dot.svg" alt="clock">
                                      </button>
                                      <ul class="dropdown-menu dropdown-actions" aria-labelledby="dropdownMenuButton1" data-popper-placement="bottom-start">
                                       
              
                                        <li>
                                          <a href="#" class="dropdown-item" >
                                            <span>
                                                  <img src="assets/images/svg/pen.svg" alt="pen">
                                                </span>
                                            Edit
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#" class="dropdown-item" >
                                            <span>
                                                  <img src="assets/images/svg/copy-link.svg" alt="copylink">
                                                </span>
                                            Copy Link
                                          </a>
                                        </li>
                                        <li>
                                        <a   href="#" type="button"  class="dropdown-item remove-killer2 plain-btn" id="${
                                          "newbtn_1" + ID()
                                        }">
                                        <span>
                                              <img src="assets/images/svg/trash.svg" alt="copylink">
                                            </span>
                                        Delete
                                      </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                           
                                  <!-- labels  -->
                                  <div class="card-priority__labels">
                                    <ul>
                                      <li><span class="labels medium">${
                                        priority__tag.value
                                      }</span></li>
                                      <li><span class="labels urgent"><img class="rt-mr-6" src="assets/images/svg/red-circle.svg" alt="">${
                                        document.getElementById("urgent_tag")
                                          .value
                                      }</span></li>
                                    </ul>
                                  </div>
                                  <h2 class="card-priority__title">
                                    ${cardTitle.value}
                                  </h2>
                                  <!-- priority footer  -->
                                  <div class="card-priority__footer">
                                    <div>
                                      <ul class="labels-info">
                                        <li>
                                          <a href="#">
                                            <span>
                                              <img src="assets/images/svg/attach.svg" alt="icon">
                                            </span>
                                            0
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            <span>
                                              <img src="assets/images/svg/comments.svg" alt="icon">
                                            </span>
                                            0
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div>
                                      <ul class="users">
                                        <li class="users-item"><img src="assets/images/all-img/users/user1.png" alt="user-photo"></li>
                                        <li class="users-item"><img src="assets/images/all-img/users/three.png" alt="user-photo"></li>
                                        <li class="users-item"><img src="assets/images/all-img/users/two.png" alt="user-photo"></li>
                                        <li class="users-item"><img src="assets/images/all-img/users/one.png" alt="user-photo"></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
            `;
            cardPriority.appendChild(innerCard);
            cardPriority.insertBefore(innerCard, cardPriority.childNodes[0]);
            cardTitle.value = "";

            document.body.removeChild(modalbox);
            document.body.removeChild(overlay);
          });
        });
      });
    });
  }

  // kanban card add

  let btngroup = document.getElementsByName("button-group");
  btngroup.forEach(function (item, index) {
    item.addEventListener("click", function () {
      let modalbox = document.createElement("div");
      let overlay = document.createElement("div");
      overlay.setAttribute("class", "modal-backdrop fade show");
      overlay.setAttribute("id", "modal-vag3");
      modalbox.setAttribute("class", "modal fade show");
      modalbox.style.display = "block";
      modalbox.innerHTML = `
        <div class="modal-dialog createcard-modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="body-font-3">Create New Card</h5>
          <button type="button" class="plain-btn" id="modal-vag" aria-label="Close">
            <img src="assets/images/svg/close-btn.png" alt="" draggable="false">
          </button>
        </div>
        <div class="modal-body">
          <form id="boardform">
            <div class="rt-mb-24">
              <div class="row">
                <div class="col-12 rt-mb-15">
                <div className="fromGroup">
                <label class=" body-font-4 pointer block mb-2" for="card_title_1">Tittle</label>
                <input type="text" placeholder="Add tittle" class="form-control" id="card_title_1">
                
                </div>
                  
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 rt-mb-15">
                  <label for="">Priority</label>
                  <select name="" id="priority__tag" >
                    <option value="High Priority">High Priority</option>
                    <option value="Low Priority">Low Priority</option>
                  </select>
                </div>
                <div class="col-md-6 rt-mb-15">
                  <label for="">Label</label>
                  <select name="" id="urgent_tag">
                    <option value="hight">Urgents</option>
                    <option value="low">Medium</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-12 rt-mb-15">
                  <textarea  rows="4" placeholder="Write something about your events..." ></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 rt-mb-15">
                  <div class="fromGroup has-icon">
                    <label>Created Date</label>
                    <div class="form-control-icon">
                      <input class="form-control date-picker-calender" type="text" placeholder="DD / MM / YY">
                      <div class="icon-badge-2">
                        <img src="assets/images/svg/calendar.svg" alt="">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 rt-mb-15">
                  <div class="fromGroup has-icon">
                    <label>Created Date</label>
                    <div class="form-control-icon">
                      <input class="form-control date-picker-calender" type="text" placeholder="DD / MM / YY">
                      <div class="icon-badge-2">
                        <img src="assets/images/svg/calendar.svg" alt="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                <div className="fromGroup">
                 <label for="member-email" class="block rt-mb-4">Add Member</label>
                  <input type="text" placeholder="Member email address" id="member-email">
                </div>
                 
                </div>
              </div>
            </div>
            <div class="createcard-modal-footer d-flex justify-content-between">
              <button type="button" class="btn btn-dark2 pill" id="modal-vag2" >Cancel</button>
       
              <button type="submit" class="btn btn-primary pill btn-icon" id="createcard">
                <span class="button-content-wrapper">
                <span class="button-icon align-icon-right">
                  <i class="ph-arrow-right"></i>
                </span>
                <span class="button-text" >
                  Create Column
                </span>
                </span>
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
        
        `;
      document.body.appendChild(modalbox);
      document.body.appendChild(overlay);
      document.getElementById("modal-vag").onclick = function () {
        document.body.removeChild(modalbox);
        document.body.removeChild(overlay);
      };
      document.getElementById("modal-vag2").onclick = function () {
        document.body.removeChild(modalbox);
        document.body.removeChild(overlay);
      };
      document.getElementById("modal-vag3").onclick = function () {
        document.body.removeChild(modalbox);
        document.body.removeChild(overlay);
      };

      const createcard = document.getElementById("boardform"); // form id
      createcard.addEventListener("submit", function (event) {
        event.preventDefault();
        let cardTitle = document.getElementById("card_title_1");
        let collectdate = new Date();
        let currentdate =
          collectdate.getDate() +
          " " +
          collectdate.toLocaleString("default", { month: "short" }) +
          ", " +
          collectdate.getFullYear();
        let priority__tag = document.getElementById("priority__tag");

        let CurrentcardP = item.getAttribute("id");
        console.log(CurrentcardP);
        let cardPriority = document.getElementById(
          $("#" + CurrentcardP)
            .parent()
            .parent()
            .attr("id")
        );

        let innerCard = document.createElement("div");
        innerCard.classList.add("div");
        innerCard.innerHTML = ` 
          <div class="card-priority rt-mb-12">
                                <!-- top bar  -->
                                <div class="card-priority__header">
                                  <div class="date">
                                    <span class="icon">
                                      <img src="assets/images/svg/clock.svg" alt="clock">
                                    </span>
                                    <p>${currentdate}</p>
                                  </div>
                                  <!-- actions  -->
                                  <div class="card-priority__actions">
                                    <button class="dots-three text-gray-400 f-size-24" type="button" id="downMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                                      <img src="assets/images/svg/dot.svg" alt="clock">
                                    </button>
                                    <ul class="dropdown-menu dropdown-actions" aria-labelledby="dropdownMenuButton1" data-popper-placement="bottom-start">
                                     
            
                                      <li>
                                        <a href="#" class="dropdown-item" >
                                          <span>
                                                <img src="assets/images/svg/pen.svg" alt="pen">
                                              </span>
                                          Edit
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" class="dropdown-item" >
                                          <span>
                                                <img src="assets/images/svg/copy-link.svg" alt="copylink">
                                              </span>
                                          Copy Link
                                        </a>
                                      </li>
                                      <li>
                                     
                                    <a     class="dropdown-item remove-killer plain-btn">
                                        <span>
                                              <img src="assets/images/svg/trash.svg" alt="copylink">
                                            </span>
                                        Delete
                                      </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                         
                                <!-- labels  -->
                                <div class="card-priority__labels">
                                  <ul>
                                    <li><span class="labels medium">${
                                      priority__tag.value
                                    }</span></li>
                                    <li><span class="labels urgent"><img class="rt-mr-6" src="assets/images/svg/red-circle.svg" alt="">${
                                      document.getElementById("urgent_tag")
                                        .value
                                    }</span></li>
                                  </ul>
                                </div>
                                <h2 class="card-priority__title">
                                  ${cardTitle.value}
                                </h2>
                                <!-- priority footer  -->
                                <div class="card-priority__footer">
                                  <div>
                                    <ul class="labels-info">
                                      <li>
                                        <a href="#">
                                          <span>
                                            <img src="assets/images/svg/attach.svg" alt="icon">
                                          </span>
                                          0
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span>
                                            <img src="assets/images/svg/comments.svg" alt="icon">
                                          </span>
                                          0
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div>
                                    <ul class="users">
                                      <li class="users-item"><img src="assets/images/all-img/users/user1.png" alt="user-photo"></li>
                                      <li class="users-item"><img src="assets/images/all-img/users/three.png" alt="user-photo"></li>
                                      <li class="users-item"><img src="assets/images/all-img/users/two.png" alt="user-photo"></li>
                                      <li class="users-item"><img src="assets/images/all-img/users/one.png" alt="user-photo"></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
          `;
        cardPriority.appendChild(innerCard);
        cardPriority.insertBefore(innerCard, cardPriority.childNodes[0]);
        cardTitle.value = "";

        document.body.removeChild(modalbox);
        document.body.removeChild(overlay);
      });
    });
  });

  const UniqBoardButton = document.querySelectorAll(".remove-killer");
  const UinqBoard = document.getElementsByClassName("card-priority");

  UinqBoard.forEach(function (item) {
    item.setAttribute("id", "pid_" + ID());
  });
  UniqBoardButton.forEach(function (item, index) {
    item.setAttribute("id", ID());
    let singleItem = item.getAttribute("id");
    let getsingletem = document.getElementById(singleItem);
    let removeitemid =
      getsingletem.parentNode.parentNode.parentNode.parentNode.parentNode.id;
    let removeitem = document.getElementById(removeitemid);

    getsingletem.addEventListener("click", function () {
      removeitem.remove();
    });
  });

  let cardviewModal = document.querySelectorAll(".card-priority__title");

  cardviewModal.forEach(function (singlemodal) {
    $(singlemodal).on("click", function () {
      $("#viewmodal").modal("toggle");
    });
  });
})(jQuery);

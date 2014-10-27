TestCreator = {
   /* *//**
     * @function updateEditGroupModal
     * Вызывает форму с созданием таблицы с полями(id вопроса,тип вопроса,текст)
     *
     * @param {testGroupId} Id тест-группы
     *
     */
    updateEditGroupModal: function (testGroupId) {
        $.getJSON('/domic3/TestCreator_updateEditGroupModal.json', {testGroupId: testGroupId}, function (data) {
            $("#groupQuestions tbody").empty();
            data.forEach(function (el) {
                $("#groupQuestions tbody").append("<tr testQuestionId=\""+el.id+"\"><td>" + el.id + "</td><td>" + el.type + "</td><td>" + el.text + "</td>" +
                    "<td><form><button class=\"btn btn-link\" type=button  id=createExtraButton value=edit onclick='TestCreator.editQuestions()'> <span class=\"glyphicon glyphicon-pencil\"></span>" +
                    "<button class=\"btn btn-link\" type=button  id=createExtraButton value=del onclick='TestCreator.delQuestions(\""+testGroupId+"\",\""+el.id+"\")'> <span class=\"glyphicon glyphicon-remove\"></span></form></td></tr>");
            })

        });
    },


    /**
     * @function ChoiceType
     * Присваивает значению value тип вопроса по нажитие выбора вороса
     *
     * @param {typequestion} тип вопроса, указанный в функции onclick
     *
     */
    ChoiceType:function(typequestion){
        console.log(typequestion)
        $("#setType").val(typequestion);
    },


    /**
     * @function preEditStudy
     *  Добавляет в адресную строку id группы при создании вопроса
     *
     * @param {testGroupId}
     *
     */
    preEditStudy: function(testGroupId) {
        $("#EditStudy form").attr("action", "/test/ae/" + testGroupId);
    },


    /**
     * @function delQuestions
     * Удаляет вопрос из базы данных и убирает вопрос из таблицы с формой
     *
     * @param {testGroupId} id группы
     * @param {testQuestionId} id вопроса
     *
     */
    delQuestions: function(testGroupId,testQuestionId){
        $("#groupQuestions tr[testQuestionId='"+testQuestionId+"']").detach();
        $.getJSON('/domic3/TestCreator_delQuestions.json', {testGroupId: testGroupId, testQuestionId: testQuestionId}, function (data) {
        });
    }

  //  editQuestions:function(testGroupId,testQuestionId){
   //     $.getJSON('/domic3/TestCreator_editQuestions.json', {testGroupId: testGroupId, testQuestionId: testQuestionId}, function (data) {
    //    });

    //}
};


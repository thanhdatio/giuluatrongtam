var quotes = [
  ["Tôi là một người có thân hình vạm vỡ và to lớn, tôi cao 1m75 nặng 68kg, hệ cơ bắp của tôi rất phát triển, tay tôi rất to và nhiều gân gốc, tĩnh mạch nổi lên khi tôi làm việc nặng, chân tôi rất to và khỏe để phục vụ cho việc chạy nhanh của tôi, mỗi bước đi và bước chạy của tôi đều rất mạnh mẽ và đầy uy lực. Bụng tôi rất săn chắc, từng bó cơ bụng thắt chặt bảo vệ cột sống của tôi, kết hợp với hệ thống cơ lưng rất to và khỏe. Mông đùi tôi rất săn chắc và mạnh mẽ, ngực tôi rất nở, nhìn rất khỏe và tràn đầy sinh lực, các bắp tay của tôi rất săn chắc, tạo cảm giác an toàn và được bảo vệ cho người tôi yêu. Bàn tay và bàn chân của tôi luôn tỏa ra hơi ấm áp.", "Cơ thể tôi rất khỏe"],
  ["Hệ thống mạch máu của tôi rất phát triển, các động mạch rất thông thoáng, giúp luân chuyển máu đến được tất cả các bộ phận trong cơ thể, hệ thống mao mạch của tôi rất phát triển để hỗ trợ đưa máu về tim một cách hiệu quả, hệ thống kinh mạch của tôi rất phát triển và thông thoáng. Các dinh dưỡng mà tôi ăn được hòa trong máu đến từng tế bào để phục vụ sinh hoạt. Phổi tôi rất to và khỏe, từng hơi thở mạnh mẽ trong tôi đưa một lượng lớn oxy vào phổi sau đó đi vào máu để đến từng bộ phận và tế bào của tôi tràn ngập trong oxy.", "Cơ thể tôi rất khỏe"],
  ["Khung xương của tôi rất lớn và chắc khỏe, nhờ có khung xương to giúp cho cơ thể tôi cường tráng và rất mạnh mẽ, các khớp xương rất dẻo dai và linh hoạt giúp cho tôi có thể thực hiện nhiều động tác trong sinh hoạt. Tôi đặc biệt ấn tượng với cơ lõi của tôi, nó rất săn chắc và khỏe mạnh, làm bộ khung cho hệ thống xương khớp của tôi được giữ ổn định và cân đối.", "Cơ thể tôi rất khỏe"],
  ["Tư thế của tôi rất chuẩn và đẹp, tôi ngồi rất vững và thẳng lưng để cột sống của tôi luôn trong trạng thái cân bằng lực nhất có thể, cánh tay tôi luôn mở rộng để có thể thu nạp thêm được nhiều năng lượng hơn, từng bước đi của tôi nhanh nhẹn, thanh thoát và rất mạnh mẽ.", "Cơ thể tôi rất khỏe"],
  ["Hệ thống nội tạng của tôi hoạt động rất tốt và hiệu quả, giúp tiêu hóa toàn bộ thức ăn và cấp đủ dinh dưỡng vào máu để nuôi tế bào, ngoài ra nó còn tiết rất nhiều hóc môn tuyệt vời cho tôi như: testosterone giúp tôi trở nên nam tính và mạnh mẽ, HGH giúp cơ thể tôi luôn phát triển, tái tạo tế bào liên tục và tươi trẻ, Các hóc môn hạnh phúc tiết ra rất nhiều giúp tôi luôn cảm thấy hạnh phúc và phấn chấn.", "Cơ thể tôi rất khỏe"],
  ["Tôi là một người vui vẻ, hòa đồng và có phần hài hước, luôn nở nụ cười trên môi và coi tất cả mọi người tôi từng gặp là một tấm gương để mình học hỏi những mặt tốt của họ, tôi sẵn sàng giúp đỡ bất kỳ ai trong khả năng của mình mà không cần lý do chỉ cần có sự nhờ giúp từ họ. Với tôi mỗi người đều có những điều tuyệt vời để mình học hỏi.", "Tôi giúp đỡ mọi người"],
  ["Tôi là một nhà đầu tư rất thông minh và kỷ luật, từng giao dịch của tôi luôn có sự cân nhắc chặt chẽ và tính toán đến các rủi ro xấu nhất có thể xảy ra, mọi rủi ro đều phải nằm trong kiểm soát. Tôi không bao giờ đầu tư một cách mù quáng và không tính toán.", "Tôi đầu tư thông minh"],
  ["Nguồn thu nhập của tôi rất đa dạng, tôi sẵn sàng làm mọi thứ để đa dạng hóa nguồn thu nhập của mình, đây cũng là việc cần thiết để phòng tránh rủi ro cho tôi trong tương lai, tối đa hóa nguồn thu nhập giúp tôi có được sự tự tin trong cuộc sống. Tôi chi tiêu một cách đúng mức, chỉ tiêu vào những việc thật sự cần thiết và có giá trị.", "Tôi đầu tư thông minh"],
  ["Tài sản của tôi được tính toán và phân bổ rất rõ ràng, các tài sản có giá trị và thanh khoản cao được ưu tiên là các kim loại quý như vàng, bạc, sau đó là bất động sản và cổ phiếu, bên cạnh đó tôi luôn có một quỹ nhỏ để đầu tư vào các lĩnh vực tiềm năng trong tương lai như Tiền mã hóa và các hoạt động kinh doanh khác.", "Tôi đầu tư thông minh"],
  ["Tôi làm việc rất tập trung và rõ ràng, làm việc khoa học và hiệu quả, mọi công việc tôi thực hiện đều được cân nhắc kỹ tính hiệu quả và cần thiết, không làm các công việc kém giá trị cho bản thân. Mọi thông tin và công việc tôi xử lý đều đặt ưu tiên về độ chính xác cao nhất mà tôi có thể làm được, tôi luôn tự nhìn nhận lại các công việc đã làm để rút kinh nghiệm cho chính bản thân để tiến bộ từng ngày.", "Tôi làm việc hiệu quả"],
  ["Tôi và người tôi yêu rất hạnh phúc, tôi rất yêu cô ấy và luôn bảo vệ cô ấy trong bất kỳ trường hợp nào, chúng tôi thường đến những nơi tuyệt vời và lãng mạn, làm những việc đầy hứng khởi và đam mê ngây ngất, tôi luôn mang lại cảm giác an toàn cho cô ấy, cô ấy là nguồn cảm hứng tuyệt vời cho tôi, giúp tôi đạt được nhiều thành công hơn.", "Người yêu tôi rất tuyệt"],
  ["Mọi người trong gia đình tôi luôn hòa thuận và khỏe mạnh, bố mẹ tôi rất quan tâm tôi và sẵn sàng hỗ trợ tôi khi cần thiết, tôi rất yêu bố mẹ và luôn làm mọi thứ để có thể báo hiếu được bố mẹ. Mọi người trong gia đình tôi đều rất tuyệt vời, họ là những tấm gương để tôi học hỏi được những điều tốt đẹp hơn.","Bố mẹ tôi rất tuyệt"],
  ["Các con của tôi rất thông minh, ngoan ngoãn và khỏe mạnh. Chúng nghe lời tôi và luôn coi tôi là tấm gương để chúng học hỏi theo, tôi luôn chỉ bảo và hướng dẫn con tôi làm việc tốt cho xã hội, làm những việc có đạo đức. Tôi luôn hỗ trợ và bảo vệ các con tôi khi cần thiết.","Các con tôi rất tuyệt"],
  ["Tôi là một người lái xe an toàn và bình tĩnh, luôn quan sát các phương tiện xung quanh để phòng tránh mọi rủi ro, tôi luôn nhường đường cho những ai cần đi trước và đi gọn trong phần đường của mình để hạn chế tối đa rủi ro, mỗi giây phút trên đường đối với tôi là để rèn luyện tính kỷ luật và nhường nhịn của mình.","Tôi lái xe an toàn"],
  ["Tôi chỉ làm những việc tốt và có đạo đức, không vi phạm pháp luật, với tôi việc giúp đỡ được người khác cũng chính là đang giúp đỡ chính bản thân mình, từ đó có thể hoàn thiện mình hơn.","Tôi giúp đỡ mọi người"],
  ["Phong cách ăn mặc của tôi đơn giản, gọn gàng và không cầu kỳ, tôi luôn chọn những bộ quần áo giúp tôi có thể thoải mái nhất trong các hoạt động hàng ngày và tiết kiệm tối đa thời gian cho tôi.","Tôi ăn mặc đơn giản"],
  ["Nhà tôi và không gian xung quanh tôi luôn gọn gàng và sạch sẽ, mọi thứ đều được sắp xếp cẩn thận đúng vị trí, mọi vật dụng sau khi sử dụng đều được cất đúng vị trí một cách gọn gàng, qua đó luôn mang lại cảm giác dễ chịu cho tôi, điều này tiếp thêm năng lượng cho tôi hàng ngày.","Tôi là người gọn gàng"],
  ["Tôi coi mọi sự kiện xảy ra với tôi hôm nay chính là kết quả từ những hành động của tôi trong quá khứ và tôi chấp nhận điều này, những hành động tốt của tôi hôm nay sẽ mang lại kết quả tuyệt vời nhất cho tôi trong tương lai.","Tâm tôi rất sáng suốt"],
  ["Tôi chỉ thực hiện những hành động đã được thấy trong tâm trí, tôi không bao giờ để tâm trí trong trạng thái vô định, không bao giờ làm mọi thứ mà không kiểm soát.","Tâm tôi rất sáng suốt"],
  ["Mắt của tôi rất sáng và đẹp, khả năng điều tiết và nhìn xa của mắt rất tốt, ánh mắt của tôi toát lên thần khí rất đặc biệt và uy lực.","Mắt tôi rất là đẹp"],
  ["Tôi là tôi, tôi tự quyết định những gì mình sẽ làm và thực hiện, không ai có thể can thiệp vào quyết định của tôi, mọi tác động bên ngoài chỉ mang tính chất tham khảo.","Tâm tôi rất sáng suốt"],
  ["Với tôi, việc đi một mình hay có người đi cùng hay không không quan trọng, tôi tự tạo hạnh phúc cho chính mình, tất nhiên việc có người đi cùng sẽ vui và nhiều cảm hứng hơn.","Tôi là người hạnh phúc"],
  ["Tất cả những hành động của mọi người đối với tôi đều nằm trong giới hạn về mặt nhận thức của họ, tôi không bao giờ đánh giá các hành động đó, cho dù hành động đó tốt với tôi hay gây hại cho tôi thì nó cũng không quan trọng, tôi biết rằng nhận thức của mỗi người là khác nhau.","Tâm tôi rất sáng suốt"],
  ["Tôi không bao giờ nhìn vào cái sai hay cái hạn chế của người khác để đánh giá và hạ thấp họ, tôi thường nhìn vào mặt tốt của người khác để đối chiếu lại với chính bản thân để học hỏi và hoàn thiện hơn.","Tôi tiến bộ từng ngày"],
  ["Với tôi, tất cả các vấn đề hay sự kiện xảy ra đều có xác suất nhất định phụ thuộc vào những chuỗi hành động trong quá khứ, tôi thường cân nhắc và chọn những hành động có tỉ lệ cao đạt được kết quả tốt trong tương lai.","Tôi tiến bộ từng ngày"],
  ["Tôi hiểu rằng tôi không thể hạn chế tuyệt đối các sự kiện không tốt đến với tôi, tôi chấp nhận mọi thứ đến với tôi, tôi sẽ xử lý từng vấn đề một cách tốt nhất để hướng tới những kết quả tốt đẹp hơn trong tương lai. Trong từng hành động tôi luôn năng ngừa các rủi ro không tốt có thể đến với mình.","Tôi tiến bộ từng ngày"],
  ["Với tôi, thời gian là tài sản quý giá nhất, một khi thời gian đã trôi đi thì không thể quay lại. Do đó, tôi luôn cân nhắc các hành động của mình phải thật ý nghĩa để không bỏ phí thời gian, các hành động không mang lại nhiều giá trị thì tôi không bao giờ thực hiện, trước khi thực hiện các hành động tôi cần tính toán đến kết quả sau cùng của hành động đó.","Tôi tiến bộ từng ngày"]
];
var timing = [600, 5000, 800];
/*var inDelayOut = function(){
  $(this).fadeIn(timing[0]).delay(timing[1]).fadeOut(timing[0]);
}; revisit this */
var loadQuotes = function(){
  var rndm = Math.floor((Math.random() * (quotes.length)));
    $("#initial-right").remove();
    $("#quote").empty();
    $("#person").empty();
    $("#quote").append(quotes[rndm][0]).hide().fadeIn(timing[0]).delay(timing[1]).fadeOut(timing[0]);
    $("#quote").append("<br><span class=\"smart-quotes\" id=\"smart-right\">&rdquo;</span>");

    if(quotes[rndm][1] != ""){
      $("#person").append("<em>– "+quotes[rndm][1]+"</em>").hide().delay(timing[2]).fadeIn(timing[0]).delay(timing[1]-timing[2]).fadeOut(timing[0]);
    }
};
$(document).ready(function(){
  setInterval(loadQuotes, 6200);

});

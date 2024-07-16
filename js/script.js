document.getElementById("calculate-button").addEventListener("click", function () {
    var weight = document.getElementById("input-weight").value;
    var height = document.getElementById("input-height").value;
    var resultBMI = document.getElementById("result-bmi");
    var resultWeightDiff = document.getElementById("result-weight-diff");
    var resultMessageForm = document.getElementById("result-message-form");
    var statusMessage = document.getElementById("status-message");

    if (weight && height) {
        // Melakukan konversi hitung dari cm ke m
        height = height / 100;

        // Hitung BMI
        var bmi = weight / (height * height);
        bmi = bmi.toFixed(2); // Membulatkan angka agar memiliki 2 angka desimal

        // Hitung berat badan ideal
        var minWeight = 18.5 * (height * height);
        var maxWeight = 24.9 * (height * height);

        // Hitung selisih berat badan
        var weightDiff = 0;
        var diffMessage = "";

        if (weight < minWeight) {
            weightDiff = minWeight - weight;
            diffMessage = weightDiff.toFixed(2);
        } else if (weight > maxWeight) {
            weightDiff = weight - maxWeight;
            diffMessage = weightDiff.toFixed(2);
        } else {
            diffMessage = "IDEAL";
        }

        // Menentukan selisih BMI 
        var difference = "";
        var messageForm = "";

        if (bmi < 18.5) {
            difference = "Kurang";
            messageForm = "Anda kekurangan berat badan.";
            messageStatus = "Hasil BMI Anda menunjukkan bahwa Anda mengalami kekurangan berat badan. Hal ini dapat berarti Anda tidak mendapatkan cukup nutrisi yang dibutuhkan oleh tubuh. Kekurangan berat badan dapat menyebabkan masalah kesehatan seperti kekurangan vitamin dan mineral, sistem kekebalan tubuh yang lemah, dan masalah perkembangan. Disarankan untuk berkonsultasi dengan ahli gizi atau dokter untuk mendapatkan saran yang tepat dalam menambah berat badan secara sehat. Meningkatkan asupan kalori dengan makanan bergizi serta melakukan latihan kekuatan dapat membantu Anda mencapai berat badan yang sehat."
        } else if (bmi >= 18.5 && bmi < 24.9) {
            difference = "Normal";
            messageForm = "Anda memiliki berat badan yang normal.";
            messageStatus = "Selamat! Hasil BMI Anda menunjukkan bahwa Anda memiliki berat badan ideal. Ini berarti Anda berada dalam rentang berat badan yang sehat untuk tinggi badan Anda. Mempertahankan berat badan ideal dapat mengurangi risiko berbagai penyakit kronis seperti penyakit jantung, diabetes, dan tekanan darah tinggi. Lanjutkan untuk mengonsumsi makanan seimbang yang kaya akan nutrisi, berolahraga secara teratur, dan menjalani gaya hidup sehat untuk menjaga berat badan Anda tetap ideal. Jangan lupa untuk rutin memeriksakan kesehatan Anda untuk memastikan bahwa Anda tetap dalam kondisi prima."
        } else if (bmi >= 25 && bmi < 29.9) {
            difference = "Lebih";
            messageForm = "Anda memiliki kelebihan berat badan.";
            messageStatus = "Hasil BMI Anda menunjukkan bahwa Anda mengalami kelebihan berat badan. Kelebihan berat badan dapat meningkatkan risiko terkena penyakit kronis seperti penyakit jantung, diabetes tipe 2, dan tekanan darah tinggi. Untuk mencapai berat badan yang lebih sehat, pertimbangkan untuk melakukan perubahan dalam pola makan Anda, seperti mengurangi asupan kalori dari makanan tinggi lemak dan gula serta meningkatkan konsumsi buah, sayuran, dan biji-bijian. Selain itu, meningkatkan aktivitas fisik harian seperti berjalan kaki, bersepeda, atau olahraga lainnya dapat membantu Anda menurunkan berat badan. Konsultasikan dengan ahli gizi atau dokter untuk mendapatkan program penurunan berat badan yang tepat."
        } else {
            difference = "Obesitas";
            messageForm = "Anda dalam kategori obesitas.";
            messageStatus = "Hasil BMI Anda menunjukkan bahwa Anda mengalami obesitas. Obesitas adalah kondisi yang serius yang dapat meningkatkan risiko berbagai masalah kesehatan, termasuk penyakit jantung, diabetes tipe 2, tekanan darah tinggi, dan beberapa jenis kanker. Penting untuk segera mengambil langkah-langkah untuk menurunkan berat badan. Konsultasikan dengan dokter atau ahli gizi untuk mendapatkan panduan dalam membuat rencana penurunan berat badan yang aman dan efektif. Ini mungkin melibatkan perubahan pola makan, peningkatan aktivitas fisik, dan mungkin intervensi medis. Dukungan dari keluarga dan teman juga dapat sangat membantu dalam perjalanan Anda menuju kesehatan yang lebih baik."
        }

        // Tampilkan Hasilnya 
        resultBMI.innerHTML = "<p>Berat Badan " + difference + "</p>";
        resultWeightDiff.innerHTML = diffMessage;
        resultMessageForm.innerHTML = messageForm;
        statusMessage.innerHTML = messageStatus;
    } else {
        alert("Tolong masukkan berat dan tinggi badan.");
    }
});
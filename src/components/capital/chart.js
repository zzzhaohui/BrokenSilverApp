module.exports = {
    bar: {
        title: {
            text: '浏览器<br>占比',
            align: 'center',
            verticalAlign: 'middle',
            y: 50
        },
        tooltip: {
            headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: -90, // 圆环的开始角度
                endAngle: 90,    // 圆环的结束角度
                center: ['20%', '80%']
            }
        },
        series: [{
            type: 'pie',
            name: '浏览器占比',
            innerSize: '50%',
            data: [
                ['Firefox',   45.0],
                ['IE',       26.8],
                ['Chrome', 12.8],
                ['Safari',    8.5],
                ['Opera',     6.2],
                {
                    name: '其他',
                    y: 0.7,
                    dataLabels: {
                        // 数据比较少，没有空间显示数据标签，所以将其关闭
                        enabled: false
                    }
                }
            ]
        }]
    }
}
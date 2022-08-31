import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

        linkBarRight: {
            home: [
                {id: 1, title: "الرئيسية", icon: 'fa fa-home', urlPath: "/"},

            ],
            students: [
                {id: 1, title: "المتابعة الطلاب اليومية", icon: 'fa fa-users', urlPath: "/followStudent"},
                {id: 2, title: "المراجعة", icon: 'fa fa-check-circle-o', urlPath: "/review"},
                {id: 3, title: "السرد الاسبوعي", icon: 'fa fa-file-text-o', urlPath: "/weeklyStudents"},
                {id: 4, title: "اجازات الطلاب", icon: 'fa fa-pause-circle-o', urlPath: "/studentVacations"},
                {id: 5, title: "الاجازات الرسمية", icon: 'fa fa-check-square-o', urlPath: "/."},
                {id: 6, title: "الاذونات", icon: 'fa fa-stop-circle-o', urlPath: "/permissionsView"},
            ],
            interviews: [
                {id: 1, title: "المقابلات", icon: 'fa fa-map-o', urlPath: "/interviewsView"},
                {id: 2, title: "أسئلة المقابلات", icon: 'fa fa-leanpub', urlPath: "/questionInterview"},
                {id: 3, title: "طلبات القبول", icon: 'fa fa-user-plus', urlPath: "/admissionRequests"},
            ],
            records: [
                {id: 1, title: "سجل الانذرات", icon: 'fa fa-exclamation-circle', urlPath: "/alarmView"},
                {id: 2, title: "سجل التحذيرات", icon: 'fa fa-ban', urlPath: "/warningView"},
            ],
            ourPrograms: [
                {id: 1, title: "الاختبار والعرض", icon: 'fa fa-map-o', urlPath: "/ourPrograms"},
                {id: 2, title: "تسجيل في البرامج", icon: 'fa fa-home', urlPath: "/registrationProgram"},
            ],
            branches: [
                {id: 1, title: "الفروع", icon: 'fa fa-home', urlPath: "/branches"},
            ],
            other: [
                {id: 1, title: "الفصول", icon: 'fa fa-home', urlPath: "/..5"},
                {id: 2, title: "المسارات", icon: 'fa fa-home', urlPath: "/..6"},
                {id: 3, title: "المقرئين", icon: 'fa fa-home', urlPath: "/..7"},
                {id: 4, title: "تنبيهات التسميع", icon: 'fa fa-home', urlPath: "/..8"},
            ],
        },
        dataChartCardOne:
            [
                {
                    id: 1,
                    title: "عدد الطلاب الاجمالي",
                    number: 9698,
                    percent: 21.01,
                    gradients: ['#1FD0A3', 'rgba(31,208,163,0.41)', 'rgba(255,255,255,0.66)']
                },
                {
                    id: 2,
                    title: "عدد الفصول",
                    number: 4369,
                    percent: 10.01,
                    gradients: ['#1FD0A3', 'rgba(31,208,163,0.41)', 'rgba(255,255,255,0.66)']
                },
                {
                    id: 3,
                    title: "المسارات",
                    number: 4028,
                    percent: 5.01,
                    gradients: ['#FFC800', 'rgba(255,200,0,0.42)', 'rgba(255,255,255,0.66)']
                },
                {
                    id: 4,
                    title: "طلبات القبول",
                    number: 34221,
                    percent: 11.01,
                    gradients: ['#6863FB', 'rgba(104,99,251,0.41)', 'rgba(255,255,255,0.66)']
                },
                {
                    id: 5,
                    title: "الاجازات",
                    number: 4841,
                    percent: 21.01,
                    gradients: ['#369AFE', 'rgba(54,154,254,0.42)', 'rgba(255,255,255,0.66)']
                },
            ],
        dataChartCardTwo:
            [
                {id: 1, title: "المقرءيين", number: 9698, percent: 21.01},
                {id: 2, title: "الطلاب البنين", number: 3432, percent: 10.01},
                {id: 3, title: "الطلاب الاناث", number: 4028, percent: 5.01},
                {id: 4, title: "طلابات القبول", number: 34221, percent: 11.01},
            ],
        allStudents:
            [
                {
                    id: 1,
                    name: "عبدالرحمن بن علي عثمان العيد",
                    className: 'طالب في فصل مالك ابن انس',
                    saveStudent: 'تم الحفظ',
                    status: 1,
                    reviewStudent: 'تم المراجعة',
                    statusReview: 1,
                    score: 75,
                    passingScore: 50,
                    description: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.'
                },
                {
                    id: 2,
                    name: "عبدالرحمن بن علي عثمان العيد",
                    className: 'طالب في فصل مالك ابن انس',
                    saveStudent: 'لم تم الحفظ',
                    status: 0,
                    reviewStudent: 'تم المراجعة',
                    statusReview: 1,
                    score: 75,
                    passingScore: 50,
                    description: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.'
                },
                {
                    id: 3,
                    name: "عبدالرحمن بن علي عثمان العيد",
                    className: 'طالب في فصل مالك ابن انس',
                    saveStudent: 'تم الحفظ',
                    status: 1,
                    reviewStudent: 'تم المراجعة',
                    statusReview: 1,
                    score: 75,
                    passingScore: 50,
                    description: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.'
                },
                {
                    id: 4,
                    name: "عبدالرحمن بن علي عثمان العيد",
                    className: 'طالب في فصل مالك ابن انس',
                    saveStudent: ' تم الحفظ',
                    status: 1,
                    reviewStudent: 'لم تم المراجعة',
                    statusReview: 0,
                    score: 75,
                    passingScore: 50,
                    description: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.'
                },
                {
                    id: 5,
                    name: "عبدالرحمن بن علي عثمان العيد",
                    className: 'طالب في فصل مالك ابن انس',
                    saveStudent: 'تم الحفظ',
                    status: 1,
                    reviewStudent: 'تم المراجعة',
                    statusReview: 1,
                    score: 75,
                    passingScore: 50,
                    description: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.'
                },
                {
                    id: 6,
                    name: "عبدالرحمن بن علي عثمان العيد",
                    className: 'طالب في فصل مالك ابن انس',
                    saveStudent: 'لم تم الحفظ',
                    status: 0,
                    reviewStudent: 'لم تم المراجعة',
                    statusReview: 0,
                    score: 75,
                    passingScore: 50,
                    description: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.'
                },
                {
                    id: 7,
                    name: "عبدالرحمن بن علي عثمان العيد",
                    className: 'طالب في فصل مالك ابن انس',
                    saveStudent: 'تم الحفظ',
                    status: 1,
                    reviewStudent: 'تم المراجعة',
                    statusReview: 1,
                    score: 75,
                    passingScore: 50,
                    description: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.'
                },
                {
                    id: 8,
                    name: "عبدالرحمن بن علي عثمان العيد",
                    className: 'طالب في فصل مالك ابن انس',
                    saveStudent: 'لم تم الحفظ',
                    status: 0,
                    reviewStudent: 'تم المراجعة',
                    statusReview: 1,
                    score: 75,
                    passingScore: 50,
                    description: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.'
                },
                {
                    id: 9,
                    name: "عبدالرحمن بن علي عثمان العيد",
                    className: 'طالب في فصل مالك ابن انس',
                    saveStudent: 'لم تم الحفظ',
                    status: 0,
                    reviewStudent: 'تم المراجعة',
                    statusReview: 1,
                    score: 75,
                    passingScore: 50,
                    description: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.'
                },
            ],
        allInterview: [
            {
                id: 1,
                name: "إبراهيم علي المالكي",
                className: 'طالب في المسار الاول',
                statusStudent:'مقبول',
                status:1,
                Admission:'اونلاين',
                statusAdmission:1,
                alarm:'إيقاف مؤقت',
                alarmStatus:0,
                detailsRecitation: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/video.png'),
                        title: 'كيفية التسميع ',
                        subTitle: 'اونلاين'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/New folder/Group 78094.png'),
                        title: 'موقع التسميع  ',
                        subTitle: 'زووم'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'أيام التسميع ',
                        subTitle: 'السبت - الاحد- الثنين'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/New folder/Color.png'),
                        title: 'وقت التسميع',
                        subTitle: 'الساعه (12:12) ص'
                    },
                    {
                        id: 5,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'أجزاء الحفظ',
                        subTitle: 'ثلاثون جزء'
                    },
                ],
                detailsAdmission: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/video.png'),
                        title: 'كيفية التسميع ',
                        subTitle: 'اونلاين'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/New folder/Group 78094.png'),
                        title: 'موقع التسميع  ',
                        subTitle: 'زووم'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'أيام التسميع ',
                        subTitle: 'السبت - الاحد- الثنين'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/New folder/Color.png'),
                        title: 'وقت التسميع',
                        subTitle: 'الساعه (12:12) ص'
                    },
                ],
                alarmStudent: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'المسار ',
                        subTitle: 'المسار الاول'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/Group 78524.png'),
                        title: 'اسم التحذير',
                        subTitle: 'تحذير أول '
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Color5.png'),
                        title: 'عدد التحذيرات',
                        subTitle: 'واحد تحذير'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'المدة',
                        subTitle: 'شهري'
                    },
                ],
                ourPrograms: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'المسار ',
                        subTitle: 'المسار الاول'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/Group 78359.png'),
                        title: 'الفصل',
                        subTitle: 'الفصل الاول'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 77857.png'),
                        title: 'مقدار الفترة',
                        subTitle: 'عشرون وجه'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/Group 78361.png'),
                        title: 'نوعه',
                        subTitle: 'عرض أو اختبار'
                    },
                    {
                        id: 5,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'تاريخ الاختبار',
                        subTitle: '12-2-1344'
                    },
                    {
                        id: 6,
                        icon: require('@/assets/image/icon/New folder/Color.png'),
                        title: 'وقت الاختبار',
                        subTitle: 'الساعه (12:12) ص'
                    },
                ],
                informationStudent: [
                    {
                        id: 1,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 3.png'),
                        title: 'يحفظ عشرة أجزاء  ',
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 4.png'),
                        title: '1008137554',
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 5.png'),
                        title: '966505142048',
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 6.png'),
                        title: '4003122542',
                    },
                    {
                        id: 5,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 9.png'),
                        title: 'asd2498@gmail.com',
                    },
                    {
                        id: 6,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 12.png'),
                        title: '26-12-1995',
                    },
                    {
                        id: 7,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 11.png'),
                        title: 'الصف الدراسي الأول لعام 1888 هجري',
                    },
                ],
                detailsRegistration: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'تاريخ البداية',
                        subTitle: '1334-1-1'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'أيام التسميع',
                        subTitle: 'السبت - الاحد- الثنين'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 78359.png'),
                        title: 'نوع البرنامج',
                        subTitle: 'البرنامج الاول'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'المسار',
                        subTitle: 'المسار الاول'
                    },
                ],
            },
            {
                id: 2,
                name: "إبراهيم علي المالكي",
                className: 'طالب في المسار الاول',
                statusStudent:'مقبول',
                status:1,
                Admission:'اونلاين',
                statusAdmission:1,
                alarm:'إيقاف مؤقت',
                alarmStatus:0,
                detailsRecitation: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/video.png'),
                        title: 'كيفية التسميع ',
                        subTitle: 'اونلاين'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/New folder/Group 78094.png'),
                        title: 'موقع التسميع  ',
                        subTitle: 'زووم'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'أيام التسميع ',
                        subTitle: 'السبت - الاحد- الثنين'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/New folder/Color.png'),
                        title: 'وقت التسميع',
                        subTitle: 'الساعه (12:12) ص'
                    },
                    {
                        id: 5,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'أجزاء الحفظ',
                        subTitle: 'ثلاثون جزء'
                    },
                ],
                detailsAdmission: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/video.png'),
                        title: 'كيفية التسميع ',
                        subTitle: 'اونلاين'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/New folder/Group 78094.png'),
                        title: 'موقع التسميع  ',
                        subTitle: 'زووم'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'أيام التسميع ',
                        subTitle: 'السبت - الاحد- الثنين'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/New folder/Color.png'),
                        title: 'وقت التسميع',
                        subTitle: 'الساعه (12:12) ص'
                    },
                ],
                alarmStudent: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'المسار ',
                        subTitle: 'المسار الاول'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/Group 78524.png'),
                        title: 'اسم التحذير',
                        subTitle: 'تحذير أول '
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Color5.png'),
                        title: 'عدد التحذيرات',
                        subTitle: 'واحد تحذير'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'المدة',
                        subTitle: 'شهري'
                    },
                ],
                ourPrograms: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'المسار ',
                        subTitle: 'المسار الاول'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/Group 78359.png'),
                        title: 'الفصل',
                        subTitle: 'الفصل الاول'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 77857.png'),
                        title: 'مقدار الفترة',
                        subTitle: 'عشرون وجه'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/Group 78361.png'),
                        title: 'نوعه',
                        subTitle: 'عرض أو اختبار'
                    },
                    {
                        id: 5,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'تاريخ الاختبار',
                        subTitle: '12-2-1344'
                    },
                    {
                        id: 6,
                        icon: require('@/assets/image/icon/New folder/Color.png'),
                        title: 'وقت الاختبار',
                        subTitle: 'الساعه (12:12) ص'
                    },
                ],
                informationStudent: [
                    {
                        id: 1,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 3.png'),
                        title: 'يحفظ عشرة أجزاء  ',
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 4.png'),
                        title: '1008137554',
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 5.png'),
                        title: '966505142048',
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 6.png'),
                        title: '4003122542',
                    },
                    {
                        id: 5,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 9.png'),
                        title: 'asd2498@gmail.com',
                    },
                    {
                        id: 6,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 12.png'),
                        title: '26-12-1995',
                    },
                    {
                        id: 7,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 11.png'),
                        title: 'الصف الدراسي الأول لعام 1888 هجري',
                    },
                ],
                detailsRegistration: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'تاريخ البداية',
                        subTitle: '1334-1-1'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'أيام التسميع',
                        subTitle: 'السبت - الاحد- الثنين'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 78359.png'),
                        title: 'نوع البرنامج',
                        subTitle: 'البرنامج الاول'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'المسار',
                        subTitle: 'المسار الاول'
                    },
                ],

            },
            {
                id: 3,
                name: "إبراهيم علي المالكي",
                className: 'طالب في المسار الاول',
                statusStudent:'مقبول',
                status:1,
                Admission:'اونلاين',
                statusAdmission:1,
                detailsRecitation: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/video.png'),
                        title: 'كيفية التسميع ',
                        subTitle: 'اونلاين'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/New folder/Group 78094.png'),
                        title: 'موقع التسميع  ',
                        subTitle: 'زووم'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'أيام التسميع ',
                        subTitle: 'السبت - الاحد- الثنين'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/New folder/Color.png'),
                        title: 'وقت التسميع',
                        subTitle: 'الساعه (12:12) ص'
                    },
                    {
                        id: 5,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'أجزاء الحفظ',
                        subTitle: 'ثلاثون جزء'
                    },
                ],
                detailsAdmission: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/video.png'),
                        title: 'كيفية التسميع ',
                        subTitle: 'اونلاين'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/New folder/Group 78094.png'),
                        title: 'موقع التسميع  ',
                        subTitle: 'زووم'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'أيام التسميع ',
                        subTitle: 'السبت - الاحد- الثنين'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/New folder/Color.png'),
                        title: 'وقت التسميع',
                        subTitle: 'الساعه (12:12) ص'
                    },
                ],
                alarmStudent: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'المسار ',
                        subTitle: 'المسار الاول'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/Group 78524.png'),
                        title: 'اسم التحذير',
                        subTitle: 'تحذير أول '
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Color5.png'),
                        title: 'عدد التحذيرات',
                        subTitle: 'واحد تحذير'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'المدة',
                        subTitle: 'شهري'
                    },
                ],
                ourPrograms: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'المسار ',
                        subTitle: 'المسار الاول'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/Group 78359.png'),
                        title: 'الفصل',
                        subTitle: 'الفصل الاول'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 77857.png'),
                        title: 'مقدار الفترة',
                        subTitle: 'عشرون وجه'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/Group 78361.png'),
                        title: 'نوعه',
                        subTitle: 'عرض أو اختبار'
                    },
                    {
                        id: 5,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'تاريخ الاختبار',
                        subTitle: '12-2-1344'
                    },
                    {
                        id: 6,
                        icon: require('@/assets/image/icon/New folder/Color.png'),
                        title: 'وقت الاختبار',
                        subTitle: 'الساعه (12:12) ص'
                    },
                ],
                informationStudent: [
                    {
                        id: 1,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 3.png'),
                        title: 'يحفظ عشرة أجزاء  ',
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 4.png'),
                        title: '1008137554',
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 5.png'),
                        title: '966505142048',
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 6.png'),
                        title: '4003122542',
                    },
                    {
                        id: 5,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 9.png'),
                        title: 'asd2498@gmail.com',
                    },
                    {
                        id: 6,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 12.png'),
                        title: '26-12-1995',
                    },
                    {
                        id: 7,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 11.png'),
                        title: 'الصف الدراسي الأول لعام 1888 هجري',
                    },
                ],
                detailsRegistration: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'تاريخ البداية',
                        subTitle: '1334-1-1'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'أيام التسميع',
                        subTitle: 'السبت - الاحد- الثنين'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 78359.png'),
                        title: 'نوع البرنامج',
                        subTitle: 'البرنامج الاول'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'المسار',
                        subTitle: 'المسار الاول'
                    },
                ],
            },
            {
                id: 4,
                name: "إبراهيم علي المالكي",
                className: 'طالب في المسار الاول',
                statusStudent:'مرفوض',
                status:0,
                Admission:'حضوري',
                statusAdmission:2,
                detailsRecitation: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/video.png'),
                        title: 'كيفية التسميع ',
                        subTitle: 'اونلاين'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/New folder/Group 78094.png'),
                        title: 'موقع التسميع  ',
                        subTitle: 'زووم'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'أيام التسميع ',
                        subTitle: 'السبت - الاحد- الثنين'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/New folder/Color.png'),
                        title: 'وقت التسميع',
                        subTitle: 'الساعه (12:12) ص'
                    },
                    {
                        id: 5,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'أجزاء الحفظ',
                        subTitle: 'ثلاثون جزء'
                    },
                ],
                detailsAdmission: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/video.png'),
                        title: 'كيفية التسميع ',
                        subTitle: 'اونلاين'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/New folder/Group 78094.png'),
                        title: 'موقع التسميع  ',
                        subTitle: 'زووم'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'أيام التسميع ',
                        subTitle: 'السبت - الاحد- الثنين'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/New folder/Color.png'),
                        title: 'وقت التسميع',
                        subTitle: 'الساعه (12:12) ص'
                    },
                ],
                alarmStudent: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'المسار ',
                        subTitle: 'المسار الاول'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/Group 78524.png'),
                        title: 'اسم التحذير',
                        subTitle: 'تحذير أول '
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Color5.png'),
                        title: 'عدد التحذيرات',
                        subTitle: 'واحد تحذير'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'المدة',
                        subTitle: 'شهري'
                    },
                ],
                ourPrograms: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'المسار ',
                        subTitle: 'المسار الاول'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/Group 78359.png'),
                        title: 'الفصل',
                        subTitle: 'الفصل الاول'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 77857.png'),
                        title: 'مقدار الفترة',
                        subTitle: 'عشرون وجه'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/Group 78361.png'),
                        title: 'نوعه',
                        subTitle: 'عرض أو اختبار'
                    },
                    {
                        id: 5,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'تاريخ الاختبار',
                        subTitle: '12-2-1344'
                    },
                    {
                        id: 6,
                        icon: require('@/assets/image/icon/New folder/Color.png'),
                        title: 'وقت الاختبار',
                        subTitle: 'الساعه (12:12) ص'
                    },
                ],
                informationStudent: [
                    {
                        id: 1,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 3.png'),
                        title: 'يحفظ عشرة أجزاء  ',
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 4.png'),
                        title: '1008137554',
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 5.png'),
                        title: '966505142048',
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 6.png'),
                        title: '4003122542',
                    },
                    {
                        id: 5,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 9.png'),
                        title: 'asd2498@gmail.com',
                    },
                    {
                        id: 6,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 12.png'),
                        title: '26-12-1995',
                    },
                    {
                        id: 7,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 11.png'),
                        title: 'الصف الدراسي الأول لعام 1888 هجري',
                    },
                ],
                detailsRegistration: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'تاريخ البداية',
                        subTitle: '1334-1-1'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'أيام التسميع',
                        subTitle: 'السبت - الاحد- الثنين'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 78359.png'),
                        title: 'نوع البرنامج',
                        subTitle: 'البرنامج الاول'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'المسار',
                        subTitle: 'المسار الاول'
                    },
                ],

            },
            {
                id: 5,
                name: "إبراهيم علي المالكي",
                className: 'طالب في المسار الاول',
                statusStudent:'مرفوض',
                status:0,
                Admission:'اونلاين',
                statusAdmission:1,
                alarm:'إيقاف مؤقت',
                alarmStatus:0,
                detailsRecitation: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/video.png'),
                        title: 'كيفية التسميع ',
                        subTitle: 'اونلاين'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/New folder/Group 78094.png'),
                        title: 'موقع التسميع  ',
                        subTitle: 'زووم'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'أيام التسميع ',
                        subTitle: 'السبت - الاحد- الثنين'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/New folder/Color.png'),
                        title: 'وقت التسميع',
                        subTitle: 'الساعه (12:12) ص'
                    },
                    {
                        id: 5,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'أجزاء الحفظ',
                        subTitle: 'ثلاثون جزء'
                    },
                ],
                detailsAdmission: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/video.png'),
                        title: 'كيفية التسميع ',
                        subTitle: 'اونلاين'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/New folder/Group 78094.png'),
                        title: 'موقع التسميع  ',
                        subTitle: 'زووم'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'أيام التسميع ',
                        subTitle: 'السبت - الاحد- الثنين'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/New folder/Color.png'),
                        title: 'وقت التسميع',
                        subTitle: 'الساعه (12:12) ص'
                    },
                ],
                alarmStudent: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'المسار ',
                        subTitle: 'المسار الاول'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/Group 78524.png'),
                        title: 'اسم التحذير',
                        subTitle: 'تحذير أول '
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Color5.png'),
                        title: 'عدد التحذيرات',
                        subTitle: 'واحد تحذير'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'المدة',
                        subTitle: 'شهري'
                    },
                ],
                ourPrograms: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'المسار ',
                        subTitle: 'المسار الاول'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/Group 78359.png'),
                        title: 'الفصل',
                        subTitle: 'الفصل الاول'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 77857.png'),
                        title: 'مقدار الفترة',
                        subTitle: 'عشرون وجه'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/Group 78361.png'),
                        title: 'نوعه',
                        subTitle: 'عرض أو اختبار'
                    },
                    {
                        id: 5,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'تاريخ الاختبار',
                        subTitle: '12-2-1344'
                    },
                    {
                        id: 6,
                        icon: require('@/assets/image/icon/New folder/Color.png'),
                        title: 'وقت الاختبار',
                        subTitle: 'الساعه (12:12) ص'
                    },
                ],
                informationStudent: [
                    {
                        id: 1,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 3.png'),
                        title: 'يحفظ عشرة أجزاء  ',
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 4.png'),
                        title: '1008137554',
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 5.png'),
                        title: '966505142048',
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 6.png'),
                        title: '4003122542',
                    },
                    {
                        id: 5,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 9.png'),
                        title: 'asd2498@gmail.com',
                    },
                    {
                        id: 6,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 12.png'),
                        title: '26-12-1995',
                    },
                    {
                        id: 7,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 11.png'),
                        title: 'الصف الدراسي الأول لعام 1888 هجري',
                    },
                ],
                detailsRegistration: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'تاريخ البداية',
                        subTitle: '1334-1-1'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'أيام التسميع',
                        subTitle: 'السبت - الاحد- الثنين'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 78359.png'),
                        title: 'نوع البرنامج',
                        subTitle: 'البرنامج الاول'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'المسار',
                        subTitle: 'المسار الاول'
                    },
                ],

            },
            {
                id: 6,
                name: "إبراهيم علي المالكي",
                className: 'طالب في المسار الاول',
                statusStudent:'حضوري',
                status:2,
                Admission:'اونلاين',
                statusAdmission:1,
                detailsRecitation: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/video.png'),
                        title: 'كيفية التسميع ',
                        subTitle: 'اونلاين'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/New folder/Group 78094.png'),
                        title: 'موقع التسميع  ',
                        subTitle: 'زووم'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'أيام التسميع ',
                        subTitle: 'السبت - الاحد- الثنين'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/New folder/Color.png'),
                        title: 'وقت التسميع',
                        subTitle: 'الساعه (12:12) ص'
                    },
                    {
                        id: 5,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'أجزاء الحفظ',
                        subTitle: 'ثلاثون جزء'
                    },
                ],
                detailsAdmission: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/video.png'),
                        title: 'كيفية التسميع ',
                        subTitle: 'اونلاين'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/New folder/Group 78094.png'),
                        title: 'موقع التسميع  ',
                        subTitle: 'زووم'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'أيام التسميع ',
                        subTitle: 'السبت - الاحد- الثنين'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/New folder/Color.png'),
                        title: 'وقت التسميع',
                        subTitle: 'الساعه (12:12) ص'
                    },
                ],
                alarmStudent: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'المسار ',
                        subTitle: 'المسار الاول'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/Group 78524.png'),
                        title: 'اسم التحذير',
                        subTitle: 'تحذير أول '
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Color5.png'),
                        title: 'عدد التحذيرات',
                        subTitle: 'واحد تحذير'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'المدة',
                        subTitle: 'شهري'
                    },
                ],
                ourPrograms: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'المسار ',
                        subTitle: 'المسار الاول'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/Group 78359.png'),
                        title: 'الفصل',
                        subTitle: 'الفصل الاول'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 77857.png'),
                        title: 'مقدار الفترة',
                        subTitle: 'عشرون وجه'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/Group 78361.png'),
                        title: 'نوعه',
                        subTitle: 'عرض أو اختبار'
                    },
                    {
                        id: 5,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'تاريخ الاختبار',
                        subTitle: '12-2-1344'
                    },
                    {
                        id: 6,
                        icon: require('@/assets/image/icon/New folder/Color.png'),
                        title: 'وقت الاختبار',
                        subTitle: 'الساعه (12:12) ص'
                    },
                ],
                informationStudent: [
                    {
                        id: 1,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 3.png'),
                        title: 'يحفظ عشرة أجزاء  ',
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 4.png'),
                        title: '1008137554',
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 5.png'),
                        title: '966505142048',
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 6.png'),
                        title: '4003122542',
                    },
                    {
                        id: 5,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 9.png'),
                        title: 'asd2498@gmail.com',
                    },
                    {
                        id: 6,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 12.png'),
                        title: '26-12-1995',
                    },
                    {
                        id: 7,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 11.png'),
                        title: 'الصف الدراسي الأول لعام 1888 هجري',
                    },
                ],
                detailsRegistration: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'تاريخ البداية',
                        subTitle: '1334-1-1'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'أيام التسميع',
                        subTitle: 'السبت - الاحد- الثنين'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 78359.png'),
                        title: 'نوع البرنامج',
                        subTitle: 'البرنامج الاول'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'المسار',
                        subTitle: 'المسار الاول'
                    },
                ],

            },
            {
                id: 7,
                name: "إبراهيم علي المالكي",
                className: 'طالب في المسار الاول',
                statusStudent:'حضوري',
                status:2,
                Admission:'حضوري',
                statusAdmission:2,
                detailsRecitation: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/video.png'),
                        title: 'كيفية التسميع ',
                        subTitle: 'اونلاين'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/New folder/Group 78094.png'),
                        title: 'موقع التسميع  ',
                        subTitle: 'زووم'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'أيام التسميع ',
                        subTitle: 'السبت - الاحد- الثنين'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/New folder/Color.png'),
                        title: 'وقت التسميع',
                        subTitle: 'الساعه (12:12) ص'
                    },
                    {
                        id: 5,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'أجزاء الحفظ',
                        subTitle: 'ثلاثون جزء'
                    },
                ],
                detailsAdmission: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/video.png'),
                        title: 'كيفية التسميع ',
                        subTitle: 'اونلاين'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/New folder/Group 78094.png'),
                        title: 'موقع التسميع  ',
                        subTitle: 'زووم'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'أيام التسميع ',
                        subTitle: 'السبت - الاحد- الثنين'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/New folder/Color.png'),
                        title: 'وقت التسميع',
                        subTitle: 'الساعه (12:12) ص'
                    },
                ],
                alarmStudent: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'المسار ',
                        subTitle: 'المسار الاول'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/Group 78524.png'),
                        title: 'اسم التحذير',
                        subTitle: 'تحذير أول '
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Color5.png'),
                        title: 'عدد التحذيرات',
                        subTitle: 'واحد تحذير'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'المدة',
                        subTitle: 'شهري'
                    },
                ],
                ourPrograms: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'المسار ',
                        subTitle: 'المسار الاول'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/Group 78359.png'),
                        title: 'الفصل',
                        subTitle: 'الفصل الاول'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 77857.png'),
                        title: 'مقدار الفترة',
                        subTitle: 'عشرون وجه'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/Group 78361.png'),
                        title: 'نوعه',
                        subTitle: 'عرض أو اختبار'
                    },
                    {
                        id: 5,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'تاريخ الاختبار',
                        subTitle: '12-2-1344'
                    },
                    {
                        id: 6,
                        icon: require('@/assets/image/icon/New folder/Color.png'),
                        title: 'وقت الاختبار',
                        subTitle: 'الساعه (12:12) ص'
                    },
                ],
                informationStudent: [
                    {
                        id: 1,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 3.png'),
                        title: 'يحفظ عشرة أجزاء  ',
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 4.png'),
                        title: '1008137554',
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 5.png'),
                        title: '966505142048',
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 6.png'),
                        title: '4003122542',
                    },
                    {
                        id: 5,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 9.png'),
                        title: 'asd2498@gmail.com',
                    },
                    {
                        id: 6,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 12.png'),
                        title: '26-12-1995',
                    },
                    {
                        id: 7,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 11.png'),
                        title: 'الصف الدراسي الأول لعام 1888 هجري',
                    },
                ],
                detailsRegistration: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'تاريخ البداية',
                        subTitle: '1334-1-1'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'أيام التسميع',
                        subTitle: 'السبت - الاحد- الثنين'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 78359.png'),
                        title: 'نوع البرنامج',
                        subTitle: 'البرنامج الاول'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'المسار',
                        subTitle: 'المسار الاول'
                    },
                ],

            },
            {
                id: 8,
                name: "إبراهيم علي المالكي",
                className: 'طالب في المسار الاول',
                statusStudent:'مقبول',
                status:1,
                Admission:'اونلاين',
                statusAdmission:1,

                detailsRecitation: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/video.png'),
                        title: 'كيفية التسميع ',
                        subTitle: 'اونلاين'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/New folder/Group 78094.png'),
                        title: 'موقع التسميع  ',
                        subTitle: 'زووم'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'أيام التسميع ',
                        subTitle: 'السبت - الاحد- الثنين'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/New folder/Color.png'),
                        title: 'وقت التسميع',
                        subTitle: 'الساعه (12:12) ص'
                    },
                    {
                        id: 5,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'أجزاء الحفظ',
                        subTitle: 'ثلاثون جزء'
                    },
                ],
                detailsAdmission: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/video.png'),
                        title: 'كيفية التسميع ',
                        subTitle: 'اونلاين'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/New folder/Group 78094.png'),
                        title: 'موقع التسميع  ',
                        subTitle: 'زووم'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'أيام التسميع ',
                        subTitle: 'السبت - الاحد- الثنين'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/New folder/Color.png'),
                        title: 'وقت التسميع',
                        subTitle: 'الساعه (12:12) ص'
                    },
                ],
                alarmStudent: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'المسار ',
                        subTitle: 'المسار الاول'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/Group 78524.png'),
                        title: 'اسم التحذير',
                        subTitle: 'تحذير أول '
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Color5.png'),
                        title: 'عدد التحذيرات',
                        subTitle: 'واحد تحذير'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'المدة',
                        subTitle: 'شهري'
                    },
                ],
                ourPrograms: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'المسار ',
                        subTitle: 'المسار الاول'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/Group 78359.png'),
                        title: 'الفصل',
                        subTitle: 'الفصل الاول'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 77857.png'),
                        title: 'مقدار الفترة',
                        subTitle: 'عشرون وجه'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/Group 78361.png'),
                        title: 'نوعه',
                        subTitle: 'عرض أو اختبار'
                    },
                    {
                        id: 5,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'تاريخ الاختبار',
                        subTitle: '12-2-1344'
                    },
                    {
                        id: 6,
                        icon: require('@/assets/image/icon/New folder/Color.png'),
                        title: 'وقت الاختبار',
                        subTitle: 'الساعه (12:12) ص'
                    },
                ],
                informationStudent: [
                    {
                        id: 1,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 3.png'),
                        title: 'يحفظ عشرة أجزاء  ',
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 4.png'),
                        title: '1008137554',
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 5.png'),
                        title: '966505142048',
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 6.png'),
                        title: '4003122542',
                    },
                    {
                        id: 5,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 9.png'),
                        title: 'asd2498@gmail.com',
                    },
                    {
                        id: 6,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 12.png'),
                        title: '26-12-1995',
                    },
                    {
                        id: 7,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 11.png'),
                        title: 'الصف الدراسي الأول لعام 1888 هجري',
                    },
                ],
                detailsRegistration: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'تاريخ البداية',
                        subTitle: '1334-1-1'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'أيام التسميع',
                        subTitle: 'السبت - الاحد- الثنين'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 78359.png'),
                        title: 'نوع البرنامج',
                        subTitle: 'البرنامج الاول'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'المسار',
                        subTitle: 'المسار الاول'
                    },
                ],


            },
            {
                id: 9,
                name: "إبراهيم علي المالكي",
                className: 'طالب في المسار الاول',
                statusStudent:'مقبول',
                status:1,
                Admission:'اونلاين',
                statusAdmission:1,
                alarm:'إيقاف مؤقت',
                alarmStatus:0,
                detailsRecitation: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/video.png'),
                        title: 'كيفية التسميع ',
                        subTitle: 'اونلاين'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/New folder/Group 78094.png'),
                        title: 'موقع التسميع  ',
                        subTitle: 'زووم'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'أيام التسميع ',
                        subTitle: 'السبت - الاحد- الثنين'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/New folder/Color.png'),
                        title: 'وقت التسميع',
                        subTitle: 'الساعه (12:12) ص'
                    },
                    {
                        id: 5,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'أجزاء الحفظ',
                        subTitle: 'ثلاثون جزء'
                    },
                ],
                detailsAdmission: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/video.png'),
                        title: 'كيفية التسميع ',
                        subTitle: 'اونلاين'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/New folder/Group 78094.png'),
                        title: 'موقع التسميع  ',
                        subTitle: 'زووم'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'أيام التسميع ',
                        subTitle: 'السبت - الاحد- الثنين'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/New folder/Color.png'),
                        title: 'وقت التسميع',
                        subTitle: 'الساعه (12:12) ص'
                    },
                ],
                alarmStudent: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'المسار ',
                        subTitle: 'المسار الاول'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/Group 78524.png'),
                        title: 'اسم التحذير',
                        subTitle: 'تحذير أول '
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Color5.png'),
                        title: 'عدد التحذيرات',
                        subTitle: 'واحد تحذير'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'المدة',
                        subTitle: 'شهري'
                    },
                ],
                ourPrograms: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'المسار ',
                        subTitle: 'المسار الاول'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/Group 78359.png'),
                        title: 'الفصل',
                        subTitle: 'الفصل الاول'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 77857.png'),
                        title: 'مقدار الفترة',
                        subTitle: 'عشرون وجه'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/Group 78361.png'),
                        title: 'نوعه',
                        subTitle: 'عرض أو اختبار'
                    },
                    {
                        id: 5,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'تاريخ الاختبار',
                        subTitle: '12-2-1344'
                    },
                    {
                        id: 6,
                        icon: require('@/assets/image/icon/New folder/Color.png'),
                        title: 'وقت الاختبار',
                        subTitle: 'الساعه (12:12) ص'
                    },
                ],
                informationStudent: [
                    {
                        id: 1,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 3.png'),
                        title: 'يحفظ عشرة أجزاء  ',
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 4.png'),
                        title: '1008137554',
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 5.png'),
                        title: '966505142048',
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 6.png'),
                        title: '4003122542',
                    },
                    {
                        id: 5,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 9.png'),
                        title: 'asd2498@gmail.com',
                    },
                    {
                        id: 6,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 12.png'),
                        title: '26-12-1995',
                    },
                    {
                        id: 7,
                        icon: require('@/assets/image/informationStudent/Repeat Grid 11.png'),
                        title: 'الصف الدراسي الأول لعام 1888 هجري',
                    },
                ],
                detailsRegistration: [
                    {
                        id: 1,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'تاريخ البداية',
                        subTitle: '1334-1-1'
                    },
                    {
                        id: 2,
                        icon: require('@/assets/image/icon/Group 77770.png'),
                        title: 'أيام التسميع',
                        subTitle: 'السبت - الاحد- الثنين'
                    },
                    {
                        id: 3,
                        icon: require('@/assets/image/icon/Group 78359.png'),
                        title: 'نوع البرنامج',
                        subTitle: 'البرنامج الاول'
                    },
                    {
                        id: 4,
                        icon: require('@/assets/image/icon/Color.png'),
                        title: 'المسار',
                        subTitle: 'المسار الاول'
                    },
                ],
            },
        ],
        recitationDetails: [

            {
                id: 1,
                icon: require('@/assets/image/icon/Color.png'),
                title: 'المسار',
                subTitle: 'المسار الاول'
            },
            {
                id: 2,
                icon: require('@/assets/image/icon/New folder/Group 78094.png'),
                title: 'الفصل',
                subTitle: 'الفصل الاول'
            },
            {
                id: 3,
                icon: require('@/assets/image/icon/Group 77857.png'),
                title: 'مقدار الفترة',
                subTitle: 'عشرون وجه'
            },
            {
                id: 4,
                icon: require('@/assets/image/icon/Group 78361.png'),
                title: 'نوعه',
                subTitle: 'عرض أو اختبار'
            },
            {
                id: 5,
                icon: require('@/assets/image/icon/Group 77770.png'),
                title: 'تاريخ الاختبار',
                subTitle: '12-2-1344'
            },
            {
                id: 6,
                icon: require('@/assets/image/icon/New folder/Color.png'),
                title: 'وقت الاختبار',
                subTitle: 'الساعه(12:12)ص'
            },
        ]
        ,
        showBarRight: true,
        titlePage: 'الرئيسية',
    },
    mutations: {
        showRightBar(state) {
            state.showBarRight = false;
        },
        pageTitle(state, title) {
            state.titlePage = title
        }
    },
    getters: {},

    actions: {},
    modules: {}
})

import { m } from 'framer-motion';
import { useContext } from 'react';

import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';

import { useResponsive } from 'src/hooks/use-responsive';

import { CONFIG } from 'src/config-global';
import { ColorContext } from 'src/context/colorMain';
import { bgBlur, varAlpha, bgGradient, hideScrollY } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, AnimateBorder, MotionViewport } from 'src/components/animate';

export const testimonials = [
  {
    name: 'אביגיל לוי',
    postedDate: '2024-07-15',
    ratingNumber: 5,
    avatarUrl: 'https://i.pravatar.cc/150?u=a8d942',
    content:
      'ערן, אתה קוסם! הקורס שלך פתח לי עולם שלם של יצירתיות שלא ידעתי שקיים בי. בזכותך, הערוץ שלי בטיקטוק פורח, ואני מקבלת הצעות עבודה מדהימות. תודה ענקית!',
  },
  {
    name: 'דוד כהן',
    postedDate: '2024-06-28',
    ratingNumber: 4,
    avatarUrl: 'https://i.pravatar.cc/150?u=7d4258',
    content:
      'הקורס של ערן היה בדיוק מה שהייתי צריך כדי להבין איך לבנות נוכחות ברשתות החברתיות. התכנים ברורים, פרקטיים, והתוצאות לא איחרו לבוא! מומלץ בחום.',
  },
  {
    name: 'שרה מזרחי',
    postedDate: '2024-05-12',
    ratingNumber: 5,
    avatarUrl: 'https://i.pravatar.cc/150?u=a5d942',
    content:
      'לא האמנתי שאצליח ליצור סרטונים כל כך מקצועיים! ערן, אתה מורה מדהים, עם סבלנות אין קץ והמון ידע. תודה לך על הכל!',
  },
  {
    name: 'יונתן גולד',
    postedDate: '2024-03-21',
    ratingNumber: 5,
    avatarUrl: 'https://i.pravatar.cc/150?u=a6d942',
    content:
      'עשיתי המון קורסים, אבל הקורס של ערן הוא פשוט ברמה אחרת. הוא לימד אותי איך לחשוב כמו יוצר תוכן אמיתי, ואיך להביא את הסיפור שלי לעולם. ממליץ בחום!',
  },
  {
    name: 'רותי בר',
    postedDate: '2024-02-08',
    ratingNumber: 5,
    avatarUrl: 'https://i.pravatar.cc/150?u=a7d942',
    content:
      'ערן, אתה לא רק מורה מוכשר, אתה גם בן אדם מדהים. העצות שלך והתמיכה שלך היו שווים זהב. ממליצה על הקורס שלך לכל מי שרוצה להצליח בתחום הזה!',
  },
  {
    name: 'משה לוי',
    postedDate: '2024-01-15',
    ratingNumber: 4,
    avatarUrl: 'https://i.pravatar.cc/150?u=a2d942',
    content:
      'אני חייב להודות, הייתי סקפטי בהתחלה. אבל אחרי כמה שיעורים עם ערן, הבנתי שאני בידיים טובות. הוא פשוט אלוף, ואני גאה להגיד שאני תלמיד שלו.',
  },
  {
    name: 'יונתן לוי',
    postedDate: '2024-01-15',
    ratingNumber: 5,
    avatarUrl: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Male+Avatar',
    content: `קורס מצוין! תודה רבה! למדתי המון על יצירת תוכן וניהול מדיה חברתית.`,
  },
  {
    name: 'דנה כהן',
    postedDate: '2024-02-22',
    ratingNumber: 5,
    avatarUrl: 'https://via.placeholder.com/150/FF69B4/FFFFFF?text=Female+Avatar',
    content: `הקורס הוא מהמובילים בתחום העיצוב והארכיטקטורה של יישומים. עשינו כמה שינויים כמו מעבר ל-TS והטמעת useContext ב-React כדי להתאים למתודולוגיית העבודה שלנו. המוצר הוא מהטובים ביותר בשוק!`,
  },
  {
    name: 'איתי בן דוד',
    postedDate: '2024-03-10',
    ratingNumber: 4,
    avatarUrl: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Male+Avatar',
    content: `תמיכה מהירה ועוזרת מאוד. העיצוב של הקורס מדהים וגם הקוד נקי וקריא. עבודה מצוינת!`,
  },
  {
    name: 'שירה מזרחי',
    postedDate: '2024-04-05',
    ratingNumber: 5,
    avatarUrl: 'https://via.placeholder.com/150/FF69B4/FFFFFF?text=Female+Avatar',
    content: `מדהים, איכות קוד מעולה ודוגמאות רבות ליישום. הקורס הזה הוא חובה לכל יוצר תוכן.`,
  },
  {
    name: 'נועם כהן',
    postedDate: '2024-05-12',
    ratingNumber: 5,
    avatarUrl: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Male+Avatar',
    content: `היו לי כמה שאלות לאחר רכישת הקורס. ערן פרקש הגיב מהר והיה מאוד מועיל. הקוד מצוין ועובד נהדר. 5/5 כוכבים!`,
  },
  {
    name: 'ליאל חן',
    postedDate: '2024-06-20',
    ratingNumber: 5,
    avatarUrl: 'https://via.placeholder.com/150/FF69B4/FFFFFF?text=Female+Avatar',
    content: `אני מנכ"ל Codealy.io. בנינו פלטפורמה להערכת מפתחים המבוססת על משימות ב-Git repositories ומופעלת במכונות וירטואליות. רכשתי את הקורס כי היינו צריכים לספק דאשבורד מרשים ללקוחות הראשונים שלנו. אני מאוד מרוצה מהרכישה. הקוד טוב כמו העיצוב. תודה רבה!`,
  },
  {
    name: 'מורן שדה',
    postedDate: '2024-07-03',
    ratingNumber: 5,
    avatarUrl: 'https://via.placeholder.com/150/FF69B4/FFFFFF?text=Female+Avatar',
    content: `הקורס של ערן פרקש הוא ללא ספק הטוב ביותר שלקחתי. הוא מקצועי, מעשיר ומלא דוגמאות מעשיות. בזכות הקורס, הצלחתי לשפר את יכולות יצירת התוכן שלי באופן משמעותי.`,
  },
];

// ----------------------------------------------------------------------

export function AboutTestimonials() {
  const theme = useTheme();
  const { mainColor } = useContext(ColorContext);
  const mdUp = useResponsive('up', 'md');
  console.log('This is mdUp', mdUp);

  const renderDescription = (
    <Box sx={{ maxWidth: { md: 360 }, textAlign: { xs: 'center', md: 'unset' } }}>
      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ my: 3, color: 'common.white' }}>
          <Box component="a" sx={{ color: `${mainColor}.main` }}>
            ממליצים{' '}
          </Box>
          <br />
          על הקורס
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography sx={{ color: 'common.white' }}>
          המטרה שלי היא לעזור לאנשים בדרך להצלחה, ליצור ולקחת חלק ביצירת תוכן מקצועי ואיכותי יותר{' '}
          <br />
          הקורס ייתן לך כלים וטיפים וראייה רחבה יותר בכל הקשור ליצירת תוכן לרשתות החברתיות
        </Typography>
      </m.div>
    </Box>
  );

  const renderContent = (
    <Box
      sx={{
        ...hideScrollY,
        py: { md: 10 },
        height: { md: 1 },
        overflowY: { xs: 'unset', md: 'auto' },
      }}
    >
      <Masonry spacing={3} columns={{ xs: 1, md: 2 }} sx={{ ml: 0 }}>
        {testimonials.map(
          (testimonial, i) =>
            ((!mdUp && i < 5) || mdUp) && (
              <m.div key={testimonial.name} variants={varFade().inUp}>
                <AnimateBorder
                  sx={{ borderRadius: 2 }}
                  animate={{ color: theme.palette.success.dark }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </AnimateBorder>
              </m.div>
            )
        )}
      </Masonry>
    </Box>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: `0deg, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.6)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.9)}`,
          imgUrl: `${CONFIG.site.basePath}/assets/images/about/Eran.png`,
        }),
        overflow: 'hidden',
        height: { md: 840 },
        py: { xs: 10, md: 0 },
      }}
    >
      <Container component={MotionViewport} sx={{ position: 'relative', height: 1 }}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ height: 1 }}
        >
          <Grid xs={10} md={4}>
            {renderDescription}
          </Grid>

          <Grid xs={12} md={7} lg={6} alignItems="center" sx={{ height: 1 }}>
            {renderContent}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function TestimonialCard({ testimonial, sx, ...other }) {
  const theme = useTheme();

  const { name, ratingNumber, postedDate, content, avatarUrl } = testimonial;

  return (
    <Stack
      spacing={3}
      sx={{
        ...bgBlur({ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.08) }),
        p: 3,
        borderRadius: 2,
        color: 'common.white',
        ...sx,
      }}
      {...other}
    >
      <Iconify icon="mingcute:quote-left-fill" width={40} sx={{ opacity: 0.48 }} />

      <Typography variant="body2">{content}</Typography>

      <Rating value={ratingNumber} readOnly size="small" />

      <Stack direction="row">
        {/* <Avatar alt={name} src={avatarUrl} sx={{ mr: 2 }} /> */}

        <ListItemText
          primary={name}
          secondary={postedDate}
          primaryTypographyProps={{ typography: 'subtitle2', mb: 0.5 }}
          secondaryTypographyProps={{
            color: 'inherit',
            typography: 'caption',
            sx: { opacity: 0.64 },
          }}
        />
      </Stack>
    </Stack>
  );
}

import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles';

const TosScreen = () => {
    return (

        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <Text style={styles.TOStitle}>ข้อกำหนดในการให้บริการ</Text>
                <Text style={styles.TOSdate}>วันที่มีผลบังคับใช้: [01 01 2024]</Text>
                <Text style={styles.TOSparagraph}>
                    ยินดีต้อนรับสู่ HealJai! เมื่อคุณใช้แอปพลิเคชันนี้ คุณตกลงที่จะผูกพันตามข้อกำหนดในการให้บริการดังต่อไปนี้ กรุณาอ่านข้อกำหนดเหล่านี้อย่างละเอียดก่อนใช้งาน
                </Text>

                {/* Section 1 */}
                <View>
                    <Text style={styles.TOSsectionTitle}>1. การยอมรับข้อกำหนด</Text>
                    <Text style={styles.TOSparagraph}>
                        เมื่อคุณเข้าถึงหรือใช้งานแอปพลิเคชัน HealJai คุณตกลงที่จะปฏิบัติตามและผูกพันตามข้อกำหนดในการให้บริการนี้ หากคุณไม่เห็นด้วยกับข้อกำหนดเหล่านี้ คุณไม่ควรใช้งานแอปนี้
                    </Text>
                </View>

                {/* Section 2 */}
                <View>
                    <Text style={styles.TOSsectionTitle}>2. คำอธิบายบริการ</Text>
                    <Text style={styles.TOSparagraph}>
                        แอปให้บริการประเมินบุคลิกภาพตามกรอบงาน Myers-Briggs Type Indicator (MBTI) ซึ่งเป็นเครื่องมือทางจิตวิทยาที่ใช้ในการระบุประเภทบุคลิกภาพ...
                    </Text>
                </View>

                {/* Section 3 */}
                <View>
                    <Text style={styles.TOSsectionTitle}>3. คุณสมบัติของผู้ใช้</Text>
                    <Text style={styles.TOSparagraph}>
                        คุณต้องมีอายุอย่างน้อย 5 ปีจึงจะสามารถใช้แอปนี้ได้ โดยการใช้แอป คุณยืนยันว่าคุณมีอายุถึงเกณฑ์ที่กำหนด
                    </Text>
                </View>

                {/* Section 4 */}
                <View>
                    <Text style={styles.TOSsectionTitle}>4. ข้อมูลส่วนบุคคลและความเป็นส่วนตัว</Text>
                    <Text style={styles.TOSparagraph}>
                        เราเก็บรวบรวมและประมวลผลข้อมูลส่วนบุคคลตามที่อธิบายไว้ในนโยบายความเป็นส่วนตัวของเรา...
                    </Text>
                </View>

                {/* Section 5 */}
                <View>
                    <Text style={styles.TOSsectionTitle}>5. ความรับผิดชอบของผู้ใช้</Text>
                    <Text style={styles.TOSparagraph}>
                        คุณตกลงที่จะใช้แอปนี้อย่างรับผิดชอบและปฏิบัติตามกฎหมายที่เกี่ยวข้องทั้งหมด คุณต้องไม่:
                        {'\n'}{'\n'}
                        •ใช้แอปเพื่อวัตถุประสงค์ที่ผิดกฎหมายหรือไม่ได้รับอนุญาต
                        {'\n'}{'\n'}
                        •ส่งข้อมูลที่เป็นเท็จหรือก่อให้เกิดความเข้าใจผิด
                        {'\n'}{'\n'}
                        •ก่อกวนการทำงานของแอปหรือเซิร์ฟเวอร์
                    </Text>
                </View>

                {/* Section 6 */}
                <View>
                    <Text style={styles.TOSsectionTitle}>6. เนื้อหาและทรัพย์สินทางปัญญา</Text>
                    <Text style={styles.TOSparagraph}>
                        เนื้อหาทั้งหมดที่ให้บริการในแอป รวมถึงแต่ไม่จำกัดเฉพาะ ข้อความ กราฟิก โลโก้ และซอฟต์แวร์ เป็นทรัพย์สินของหรือได้รับอนุญาตจาก HealJai คุณได้รับสิทธิ์การใช้งานที่จำกัด ไม่เฉพาะตัว และไม่สามารถโอนย้ายได้ เพื่อใช้แอปนี้สำหรับการใช้งานส่วนบุคคลที่ไม่ใช่เชิงพาณิชย์เท่านั้น
                    </Text>
                </View>

                {/* Section 7 */}
                <View>
                    <Text style={styles.TOSsectionTitle}>7. ข้อจำกัดความรับผิด</Text>
                    <Text style={styles.TOSparagraph}>
                        แอปนี้ให้บริการในรูปแบบ "ตามสภาพ" และ "ตามที่มีอยู่" เราไม่ให้การรับรองหรือการรับประกันใด ๆ ทั้งโดยชัดแจ้งหรือโดยปริยายเกี่ยวกับความถูกต้อง ครบถ้วน หรือความน่าเชื่อถือของเนื้อหาที่ให้ไว้ในแอป HealJai จะไม่รับผิดชอบต่อความเสียหายใด ๆ ที่เกิดขึ้นจากการใช้แอป รวมถึงแต่ไม่จำกัดเฉพาะความเสียหายทางอ้อม บังเอิญ ทางลงโทษ หรือความเสียหายที่ตามมา
                    </Text>
                </View>

                {/* Section 8 */}
                <View>
                    <Text style={styles.TOSsectionTitle}>8. การเปลี่ยนแปลงข้อกำหนด</Text>
                    <Text style={styles.TOSparagraph}>
                        เราขอสงวนสิทธิ์ในการแก้ไขข้อกำหนดในการให้บริการเหล่านี้ได้ตลอดเวลา เราจะแจ้งให้ผู้ใช้ทราบถึงการเปลี่ยนแปลงที่สำคัญโดยการโพสต์ข้อกำหนดที่อัปเดตบนแอป การใช้แอปของคุณต่อไปหลังจากมีการโพสต์การเปลี่ยนแปลง หมายถึงการยอมรับข้อกำหนดที่เปลี่ยนแปลง
                    </Text>
                </View>

                {/* Section 9 */}
                <View>
                    <Text style={styles.TOSsectionTitle}>9. การยุติการให้บริการ</Text>
                    <Text style={styles.TOSparagraph}>
                        เราขอสงวนสิทธิ์ในการยุติหรือระงับการเข้าถึงแอปของคุณตามดุลยพินิจของเรา โดยไม่ต้องแจ้งล่วงหน้า ด้วยเหตุผลใด ๆ รวมถึงการละเมิดข้อกำหนดในการให้บริการนี้
                    </Text>
                </View>

                {/* Section 10 */}
                <View>
                    <Text style={styles.TOSsectionTitle}>10. กฎหมายที่ใช้บังคับ  </Text>
                    <Text style={styles.TOSparagraph}>
                        ข้อกำหนดในการให้บริการนี้ถูกกำหนดและตีความตามกฎหมายของประเทศไทย ข้อพิพาทใด ๆ ที่เกิดขึ้นจากหรือเกี่ยวข้องกับข้อกำหนดเหล่านี้จะถูกพิจารณาในศาลของประเทศไทย
                    </Text>
                </View>
                
                {/* Horizontal Line */}
                <View style={styles.lineContainer}>
                    <View style={styles.horizontalLine} />
                </View>

                {/* Contact Information */}
                <Text style={styles.TOScontact}>
                    หากคุณมีคำถามหรือข้อกังวลเกี่ยวกับข้อกำหนดในการให้บริการนี้ กรุณาติดต่อเราที่ HealJai@co.th
                </Text>

                {/* Closing message */}
                <Text style={styles.TOSclosing}>
                    เมื่อคุณใช้แอปนี้ แสดงว่าคุณยอมรับข้อกำหนดเหล่านี้ ขอบคุณที่เลือกใช้ HealJai!
                </Text>
            </ScrollView>
        </View>
    );
};

export default TosScreen;

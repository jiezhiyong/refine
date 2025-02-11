import { Document, Image, Page, PDFViewer, StyleSheet, Text, View } from '@react-pdf/renderer';

import { TAny } from '~/types';

type PdfProps = {
  record: TAny;
};

/**
 * PDF Layout 示例
 * 实际使用时请根据需要修改，在业务路由中使用
 */
export const PdfLayout = ({ record }: PdfProps) => {
  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page style={styles.page} size="A4">
          <View>
            <Image src={'/logo.png'} style={{ width: '100px', height: 'auto' }} />
            <View style={styles.inoviceTextNumberContainer}>
              <Text style={styles.inoviceText}>{`Title: ${record.title}`}</Text>
              <Text style={styles.inoviceId}>{`Date: 2024-01-01 00:00:00`}</Text>
            </View>
          </View>
          <View style={styles.dividerLG} />

          <View style={styles.inoviceForFromCotnainer}>
            <View style={styles.inoviceFor}>
              <Text style={styles.inoviceForFromTitle}>Inovice For:</Text>
              <View>
                <Text style={styles.inoviceForFromText}>{'Kshlerin, Heaney and Lehner'}</Text>
                <Text style={styles.inoviceForFromText}>{'Margie Smith'}</Text>
                <Text style={styles.inoviceForFromText}>{'margie@example.com'}</Text>
              </View>
            </View>

            <View style={styles.inoviceFrom}>
              <Text style={styles.inoviceForFromTitle}>From:</Text>
              <View>
                <Text style={styles.inoviceForFromText}>{'Emard Inc'}</Text>
                <Text style={styles.inoviceForFromText}>{'Huntington Beach'}</Text>
                <Text style={styles.inoviceForFromText}>{'College St, 4091, United States'}</Text>
              </View>
            </View>
          </View>

          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableHeaderItem, { width: '40%' }]}>Mission</Text>
              <Text style={[styles.tableHeaderItem, { width: '20%' }]}>Day</Text>
              <Text style={[styles.tableHeaderItem, { width: '20%' }]}>Day Rate</Text>
              <Text style={[styles.tableHeaderItem, { width: '20%' }]}>Total</Text>
            </View>
            {[
              { mission: 'transition models', day: 3, daily_rate: 209, total: 627 },
              { mission: 'strategize initiatives ', day: 4, daily_rate: 253, total: 1012 },
              { mission: 'incubate experiences ', day: 4, daily_rate: 254, total: 1016 },
            ].map((item, index) => {
              return (
                <View key={index} style={styles.tableRow}>
                  <Text style={[styles.tableCol, { width: '40%' }]}>{item.mission}</Text>
                  <Text style={[styles.tableCol, { width: '20%' }]}>{item?.day}</Text>
                  <Text style={[styles.tableCol, { width: '20%' }]}>{item?.daily_rate}</Text>
                  <Text style={[styles.tableCol, { width: '20%' }]}>{item?.daily_rate * item?.day}</Text>
                </View>
              );
            })}
          </View>

          <View style={styles.signatureTotalContainer}>
            <View style={styles.signatureContainer}>
              <Text style={styles.signatureText}>Signature:</Text>
            </View>
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Total: {'2,655'}</Text>
              <Text style={styles.totalText}>Discount(%): {'0'}</Text>
              <Text style={styles.totalText}>Tax(%): {'0'}</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>{'Huntington Beach'}</Text>
            <Text style={styles.footerText}>{'College St, 4091, United States'}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

const styles = StyleSheet.create({
  viewer: {
    width: '100%',
    height: '80vh',
    border: 'none',
  },
  page: {
    display: 'flex',
    padding: '0.4in 0.4in',
    fontSize: 12,
    color: '#333',
    backgroundColor: '#fff',
  },
  inoviceTextNumberContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inoviceText: {
    color: '#3aabf0',
  },
  inoviceId: {
    textAlign: 'center',
  },
  inoviceForFromCotnainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inoviceForFromTitle: {
    marginBottom: 12,
  },
  inoviceFor: {
    flex: 1.5,
  },
  inoviceFrom: {
    flex: 1,
  },
  inoviceForFromText: {
    color: '#787878',
    lineHeight: 1.2,
  },
  dividerLG: {
    width: '100%',
    height: 1,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#e5e5e5',
  },
  table: {
    marginTop: 16,
  },
  tableHeader: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'left',
  },
  tableHeaderItem: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    border: '1px solid #000',
  },
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  tableCol: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    border: '1px solid #000',
  },
  signatureTotalContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  signatureContainer: {},
  totalContainer: {},
  signatureText: {
    lineHeight: 1.2,
  },
  totalText: {
    lineHeight: 1.2,
  },
  footer: {
    borderTop: '1px solid #e5e5e5',
    paddingTop: 16,
    marginTop: 'auto',
  },
  footerText: {
    color: '#787878',
    lineHeight: 1.2,
  },
});
